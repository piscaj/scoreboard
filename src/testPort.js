var serialport = require("serialport"),
    SerialPort = serialport.list.SerialPort,
    portname = process.argv[2];

var myPort = new SerialPort(portname, {
    baudRate: 9600,
    options: false,
    parser: serialport.list.parser.readline('\r\n')
});

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