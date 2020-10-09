'use strict';

const faker = require('faker');

require('dotenv').config();

const io = require('socket.io-client');

let host = 'http://localhost:3000';

const capsConnection = io.connect(`${host}/caps-system`);

const storeName = process.env.STORENAME;

// const events = require('./events.js');

setInterval(() => {
  let payload = {
    store: storeName,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  capsConnection.emit('pickup', payload);
}, 5000);

capsConnection.on('delivered', thankYou);

function thankYou(payload) {
  console.log('VENDOR: Thank you for delivering', payload.orderID);
}
