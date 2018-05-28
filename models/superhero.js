const mongoose = require('mongoose');

const superheroSchema = mongoose.Schema({
  name: String,
  superhero: String
});

module.exports = mongoose.model('Superhero', superheroSchema);
