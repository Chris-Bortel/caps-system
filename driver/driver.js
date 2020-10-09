'use strict';

// require('dotenv').config();

const io = require('socket.io-client');
// const events = require('./events.js');

let host = 'http://localhost:3000';
// let host = process.env.PORT;
// console.log(host);

const capsConnection = io.connect(`${host}/caps-system`);

// events.on('pickup', inTransit);

// function inTransit(payload) {
//   setTimeout(() => {
//     console.log('DRIVER: picked up', payload.orderID);
//     events.emit('in-transit', payload);
//   }, 1000);
// }

// events.on('in-transit', deliveredPackage);

// function deliveredPackage(payload) {
//   setTimeout(() => {
//     console.log('DRIVER: Delivered order:', payload.orderID);
//     events.emit('delivered', payload);
//   }, 3000);
// }
