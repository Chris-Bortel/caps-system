'use strict';
// listeners need to be here for events
const events = require('./events.js');

events.on('pickup', inTransit);

function inTransit(payload) {
  setTimeout(() => {
    console.log('DRIVER: picked up', payload.orderID);
    events.emit('in-transit', payload);
  }, 1000);
}

events.on('in-transit', deliveredPackage);
function deliveredPackage(payload) {
  setTimeout(() => {
    console.log('DRIVER: Delivered order:', payload);
    events.emit('delivered', payload);
  }, 3000);
}
