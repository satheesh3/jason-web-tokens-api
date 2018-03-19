var mongoose = require('mongoose');
var conn = require('../db.js')
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');