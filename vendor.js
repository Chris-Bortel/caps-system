'use strict';

const faker = require('faker');
const uuid = require('uuid').v4;

require('dotenv').config();
const storeName = process.env.STORENAME;

const events = require('./events.js');

setInterval(() => {
  let payload = {
    store: storeName,
    orderID: uuid(),
    customer: faker.name.firstName.latName,
    address: faker.address.streetAddress,
  };
  events.emit('pickup', payload);
}, 5000);

events.on('delivered', thankYou);

function thankYou(payload) {
  console.log('Thank you', payload);
}
// TODO: this will go after the driver.js
// Monitor the system for events …
// Whenever the ‘delivered’ event occurs
// Log “thank you” to the console