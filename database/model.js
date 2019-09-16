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

//created a User model and exporting this instance to store data
const User = mongoose.model('Users', userSchema);

module.exports = User;