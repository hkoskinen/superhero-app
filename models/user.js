const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false // exclude password from query results by default
  }
});

module.exports = mongoose.model('User', userSchema);
