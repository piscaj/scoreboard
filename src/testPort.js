var serialport = require('serialport');// include the library
var portname = process.argv[2]; // get port name from the command line

var myPort = new SerialPort('/dev/ttyS0', {
    baudRate: 9600
  }); //Setup serial port
 
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read data
myPort.pipe(parser); // pipe the serial stream to the parser

myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
  console.log('port open. Data rate: ' + myPort.baudRate);
}

function readSerialData(data) {
  console.log(data);
}

function showPortClose() {
  console.log('port closed.');
}

function showError(error) {
  console.log('Serial port error: ' + error);
}