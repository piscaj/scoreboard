var SerialPort = require('serialport');// include the library
var portname = process.argv[2]; // get port name from the command line

var myPort = new SerialPort(portname, {
    baudRate: 9600
  }); //Setup serial port
 
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read ASCII lines
myPort.pipe(parser); // pipe the serial stream to the parser

myPort.on('open', function(){
console.log('Port is open');
});

myPort.on('close', function(){
console.log('Port is closed');
});

myPort.on('error', function(){
console.log('Port error');
});

myPort.on('data', function(){
console.log('data');
myPort.write('Recieved data\r\n')
});