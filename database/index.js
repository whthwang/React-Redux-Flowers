const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Users')
const db = mongoose.connection;

db.on('error', () => { console.log('database failed to connect') });
db.once('open', () => { console.log('database is online') });

module.exports = db;