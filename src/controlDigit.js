import { calculateChk } from './calculateChecksum.js';
import { SOH, DIGIT, ID0, ID1, ETX } from "./constants.js";


const displayCommand = s =>
{
    var TEMP = parseInt(s.target.value.charCodeAt(0),10);
    var CHK = calculateChk(DIGIT+ID0+ID1+TEMP);
    var VAL = s.target.value.charCodeAt(0).toString(16);
    //console.log(SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16));
    return SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16);
}

/////////SERIALPORT//////////////////////////////////////////////////

var SerialPort = require('serialport');// include the library
//var portname = process.argv[2]; // get port name from the command line
const SerialPortName = '/dev/ttyAMA0';       // list of connections to the server

var myPort = new SerialPort(SerialPortName, {
    baudRate: 9600
  }); //Setup serial port
 
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read data
myPort.pipe(parser); // pipe the serial stream to the parser

//Callback functions for port and parser
myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);


function showPortOpen() {
  console.log('Port open. Data rate: ' + myPort.baudRate);
  setTimeout(portWrite, 3000);
}

function readSerialData(data) {
  console.log(data);
  setTimeout(portLoop, 2000);
  //setTimeout(myPort.write(displayCommand(data)), 2000);
}

function showPortClose() {
  console.log('Port closed.');
}

function showError(error) {
  console.log(error);
}

function portWrite() {
  myPort.write("Hello... This port is ready for use.\n");
}

function portLoop() {
  myPort.write("Loop test...\n");
}

/////////WEBSOCKET//////////////////////////////////////////////////

var WebSocketServer = require('ws').Server; // include the library

var SERVER_PORT = 8081;               // port number for the webSocket server
var wss = new WebSocketServer({port: SERVER_PORT}); // create webSocket server
var connections = new Array;          // list of connections to the server

wss.on('connection', handleConnection);
 
function handleConnection(client) {
 console.log("New Connection"); // new client connected
 connections.push(client); // add this client to the connections array
 
 client.on('message', sendToSerial); // when a client sends a message,
 
 client.on('close', function() { // when a client closes its connection
 console.log("connection closed"); // print it out
 var position = connections.indexOf(client); // get the client's position in the array
 connections.splice(position, 1); // and delete it from the array
 });
}
