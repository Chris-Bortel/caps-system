'use strict';

// Global Event Pool (shared by all modules)
// singleton... This means that it is a function that is going to be used throughout the application
const Events = require('events');
const events = new Events();

module.exports = events;