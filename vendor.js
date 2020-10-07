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

events.on('delivered', thankYou);

function thankYou(payload) {
  console.log('VENDOR: Thank you for delivering', payload.orderID);
}
