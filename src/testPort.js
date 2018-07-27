const  SOH = 0x01
const  DIGIT = 0x44
const  ID0 = 0x30 
const  ID1 = 0x31
const  ETX = 0x03


const displayCommand = s =>
{
    var TEMP = parseInt(s.target.value.charCodeAt(0),10);
    var CHK = calculateChk(DIGIT+ID0+ID1+TEMP);
    var VAL = s.target.value.charCodeAt(0).toString(16);
    //console.log(SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16));
    return SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16);
}

const toHex = s =>
{
    if( s.substr(0,2).toLowerCase() === "0x" ){ return s; }

    var l = "0123456789ABCDEF";
    var o = "";

    if( typeof s !== "string" ){ s = s.toString(); }
    for( var i=0; i<s.length; i++ ){
        var c = s.charCodeAt(i);

        o = o + l.substr((c>>4),1) + l.substr((c & 0x0f),1);
        }

    //return "0x" + o;
    return o;
}



var SerialPort = require('serialport');// include the library
//var portname = process.argv[2]; // get port name from the command line
const portname = '/dev/ttyAMA0';



var myPort = new SerialPort(portname, {
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
  //setTimeout(portLoop, 2000);
  setTimeout(myPort.write(displayCommand(data)), 2000);
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