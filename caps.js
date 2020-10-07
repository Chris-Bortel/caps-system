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
  let timeStamp = Date();
  let state = {
    event: 'pickup',
    time: timeStamp,
    payload: payload,
  };
  // console.log('STATE', state);
  console.log('EVENT', state);
}
