'use strict';

// require('dotenv').config();

const io = require('socket.io-client');
// const events = require('./events.js');

let host = 'http://localhost:3000';
// let host = process.env.PORT;
// console.log(host);

const capsConnection = io.connect(`${host}/caps-system`);
const storeName = process.env.STORENAME;
// capsConnection.emit('join', 'test room', 'test');
capsConnection.on('pickup', inTransit);

// Emitting to a specific room is where I am stuck.
function inTransit(payload) {
  setTimeout(() => {
    console.log('DRIVER: picked up', payload.orderID);
    console.log('test', capsConnection.sockets);
    // TODO: capsConnection.socket is not working for the .to() method. Need to figure out how to target the socket
    capsConnection.to(storeName).emit('in-transit', payload);
  }, 1000);
}

capsConnection.on('in-transit', deliveredPackage);

function deliveredPackage(payload) {
  setTimeout(() => {
    console.log('DRIVER: Delivered order:', payload.orderID);
    capsConnection.emit('delivered', payload);
  }, 3000);
}
