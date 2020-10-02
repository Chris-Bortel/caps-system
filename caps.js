'use strict';

// Main Hub Application
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
const events = require('./events.js');

// function log()
require('./vendor.js');
require('./driver.js');

events.on('pickup', logger);
events.on('in-transit', logger);
events.on('delivered', logger);

function logger(payload) {
  console.log('=========================================');
  let state = {
    event: 'picked up or something',
    time: 8,
    payload: payload,
  };
  console.log('STATE', state);
  console.log('EVENT', payload);
}
