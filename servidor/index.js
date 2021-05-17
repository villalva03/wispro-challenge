const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const os = require('os-utils');

const socketio = require('socket.io');
const io = socketio(server, {
  transports: ['websocket', 'polling']
});

let tick = 0;
// 1. listen for socket connections
io.on('connection', client => {
setInterval(() => {
   //  2. every second, emit a 'cpu' event to user
   os.cpuUsage(cpuPercent => {
     client.emit('cpu', {
       name: tick++,
       value: cpuPercent
     });
   });

 }, 1000);
});

let tick2 = 0;
// 1. listen for socket connections
io.on('connection', client => {
setInterval(() => {
   //  2. every second, emit a 'cpu' event to user
     client.emit('memory', {
       name: tick2++,
       value: os.freememPercentage()
     });
     
   }, 1000);
 });

 setInterval(() => {
   console.log(os.freememPercentage())
   }, 1000)

server.listen(3001, () => console.log("servidor conectado"));