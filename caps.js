'use strict';

// Main Hub Application
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
const events = require('./events.js');

// function log()
require('./driver.js');
require('./vendor.js');


// build a function
function pickup(payload) {
  console.log('EVENT:', payload);
}

// second function inTransit modifies the first object... needs to change event from pickup to intransit
// intransit to delivered  
// need one interval to run on 
events.on('create', pickup);
events.emit('create', { event: 'pickup', time: Date(Date.now), payload: { store: 'string', orderID: 'id', customer: 'chris', address: 'address' }});

// Logs every event to the console with a timestamp and the event payload
// i.e. “EVENT {}”