'use strict';

// require('dotenv').config();

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const capsConnection = io.connect(`${host}/caps-system`);
capsConnection.on('pickup', inTransit);

// Emitting to a specific room is where I am stuck.
function inTransit(payload) {
  pickUp(payload);
  delivered(payload);
}

function pickUp(payload) {
  setTimeout(() => {
    console.log('DRIVER: picked up', payload.orderID);
    capsConnection.emit('in-transit', payload);
  }, 1000);
}

function delivered(payload) {
  setTimeout(() => {
    console.log('DRIVER: Delivered order:', payload.orderID);
    capsConnection.emit('delivered', payload);
  }, 1000);
}
