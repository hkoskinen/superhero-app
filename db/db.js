const mongoose = require('mongoose');

const USER      = 'dev';
const PASSWORD  = 'dev';
const HOST      = 'localhost';
const PORT      = 27017;
const DATABASE  = 'superhero';

const URI = `mongodb://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const options = {
  poolSize: 5
};

mongoose.connect(URI, options).then(
  () => {
    console.log('successfully connected to mongodb');
  },
  err => {
    console.error('failed to connect mongodb', err);
  }
);

module.exports = mongoose;
