'use strict';
// listeners need to be here for events
const events = require('./events.js');

events.on('pickup', orderReady);
events.on('in-transit', inTransit);

// events.emit('pickup');
// function log(event, payload) {
//   let timestamp = new Date(Date.now);
// }
async function orderReady(payload) {
  // I will emit my intransit event from here
  await setTimeout(() => {
    console.log(`DRIVER: picked up, ${payload.orderID}`);
  }, 1000);
  events.emit('in-transit', payload);
}

async function inTransit(payload) {
  await setTimeout(() => {
    console.log('delivered', payload);
  }, 3000);
  events.emit('delivered', payload);
}
// Drivers Module

// Monitor the system for events …

// On the ‘pickup’ event …
// Wait 1 second
// // Log “DRIVER: picked up [ORDER_ID]” to the console.
// // Emit an ‘in-transit’ event with the payload you received

// Wait 3 seconds
// //  --Log “delivered” to the console
// // Emit a ‘delivered’ event with the same payload
