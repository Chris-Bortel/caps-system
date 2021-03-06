'use strict';

const faker = require('faker');

require('dotenv').config();

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const capsConnection = io.connect(`${host}/caps-system`); // this is the plug/client that is listening to the caps system. PRIVATE ROOM is created

const storeName = process.env.STORENAME;

capsConnection.emit('join', storeName);
setInterval(() => {
  let payload = {
    store: storeName,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  capsConnection.emit('pickup', payload);
}, 5000);

capsConnection.on('in-transit', inTransit);
capsConnection.on('delivered', thankYou);

function inTransit(payload) {
  console.log('package is in transit', payload);
}

function thankYou(payload) {
  console.log('VENDOR: Thank you for delivering', payload.orderID);
}
