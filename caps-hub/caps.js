'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
console.log(port);
const io = require('socket.io')(port);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);
});
// this is the wall socket
const caps = io.of('/caps-system');
caps.on('connection', (socket) => {
  console.log('caps is connected');

  socket.on('join', (room) => {
    socket.join(room);
  });

  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    logger('in-transit', payload);
    caps.to(payload.store).emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    logger('delivered', payload);
    caps.to(payload.store).emit('delivered', payload);
  });
});

function logger(event, payload) {
  let timeStamp = Date();
  let state = {
    event: event,
    time: timeStamp,
    payload: payload,
  };
  console.log('EVENT', state);
}

function end() {
  console.log(' ');
  console.log(
    '=================================================================='
  );
  console.log(' ');
}
