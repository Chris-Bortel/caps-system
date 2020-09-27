'use strict';

// Main Hub Application
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
const events = require('./events.js');

// function log()
require('./vendor.js');
require('./driver.js');

// build a function

// Logs every event to the console with a timestamp and the event payload
// i.e. “EVENT {}”
