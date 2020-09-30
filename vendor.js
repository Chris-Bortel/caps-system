'use strict';

const faker = require('faker');

require('dotenv').config();
const storeName = process.env.STORENAME;

const events = require('./events.js');

setInterval(() => {
  let payload = {
    store: storeName,
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };
  events.emit('pickup', payload);
}, 5000);

events.on('in-transit', pickedUp);

function pickedUp(payload) {
  console.log('    -VENDOR: Let me know when it has arrived', payload);
}

// When delivery event happens, log 'thank you' to the console
