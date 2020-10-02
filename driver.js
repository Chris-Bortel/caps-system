'use strict';
// listeners need to be here for events
const events = require('./events.js');

events.on('pickup', inTransit);

function inTransit(payload) {
  setTimeout(() => {
    console.log('    -DRIVER: picked up order:', payload);
    events.emit('in-transit', payload.orderID);
  }, 1000);
}

events.on('delivered', delivered);
function delivered(payload) {
  setTimeout(() => {
    console.log('DRIVER: Delivered order:', payload);
    events.emit('delivered', payload.orderID);
  }, 3000);
}
