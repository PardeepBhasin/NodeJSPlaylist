const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String,
    password: String
});

const userModel = mongoose.model('users', schema);
module.exports = userModel;