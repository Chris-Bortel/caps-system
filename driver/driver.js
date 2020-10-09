'use strict';

// require('dotenv').config();

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const capsConnection = io.connect(`${host}/caps-system`);
capsConnection.on('pickup', inTransit);

// Emitting to a specific room is where I am stuck.
async function inTransit(payload) {
  await setTimeout(() => {
    console.log('DRIVER: picked up', payload.orderID);
    capsConnection.emit('in-transit', payload);
  }, 1000);
  deliveredPackage(payload);
}

function deliveredPackage(payload) {
  setTimeout(() => {
    console.log('DRIVER: Delivered order:', payload.orderID);
    capsConnection.emit('delivered', payload);
  }, 3000);
}

// bringing in the socket connection as capsConnection may not be pinging back to the caps.js
