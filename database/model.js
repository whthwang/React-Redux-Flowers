const mongoose = require('mongoose');
const db = require('./index.js');

const userSchema = new mongoose.Schema({
  id: Number,
  first: String,
  last: String,
  age: Number,
  location: String,
  description: String
});

const User = mongoose.model('Users', userSchema);

module.exports = User;