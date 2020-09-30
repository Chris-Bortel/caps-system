'use strict';

// Main Hub Application
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
const events = require('./events.js');

// function log()
require('./vendor.js');
require('./driver.js');

events.on('pickup', logger);
events.on('in-transit', logger);

function logger(payload) {
  console.log('=============================');
  console.log('CSPS', payload);
}
