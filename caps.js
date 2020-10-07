'use strict';

// Main Hub Application
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
const events = require('./events.js');

// function log()
require('./vendor.js');
require('./driver.js');

events.on('pickup', (payload) => {
  logger('pickup', payload);
});

events.on('in-transit', (payload) => {
  logger('in-transit', payload);
});

events.on('delivered', (payload) => {
  logger('delivered', payload);
});

function logger(event, payload) {
  console.log('=========================================');
  let timeStamp = Date();
  let state = {
    event: event,
    time: timeStamp,
    payload: payload,
  };
  // console.log('STATE', state);
  console.log('EVENT', state);
}
