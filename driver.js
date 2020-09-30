'use strict';
// listeners need to be here for events
const events = require('./events.js');

events.on('pickup', inTransit);

function inTransit(payload) {
  setTimeout(() => {
    console.log('    -DRIVER: picked up', payload);
    events.emit('in-transit', payload.orderID);
  }, 1000);
}
