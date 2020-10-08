'use strict';

const events = require('./events.js');

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);
});

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
  end();
});

function logger(event, payload) {
  let timeStamp = Date();
  let state = {
    event: event,
    time: timeStamp,
    payload: payload,
  };
  // console.log('STATE', state);
  console.log('EVENT', state);
}

function end() {
  console.log(' ');
  console.log(
    '=================================================================='
  );
  console.log(' ');
}
