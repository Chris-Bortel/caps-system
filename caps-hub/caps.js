'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
console.log(port);
const io = require('socket.io')(port);

io.on('connection', (socket) => {
  console.log('CONNECTED', socket.id);
});

const caps = io.of('/caps-system');
caps.on('connection', (socket) => {
  console.log('caps is connected');

  socket.on('join', (room) => {
    const valid = [process.env.STORENAME];
    if (valid.includes(room)) {
      console.log('Join room', room);
      socket.join(room);
    }

  socket.on('pickup', (payload) => {
    logger('pickup', payload);
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    logger('in-transit', payload);
    caps.to(process.env.STORENAME).emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    logger('delivered', payload);
    caps.to(process.env.STORENAME).emit('delivered', payload);
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
