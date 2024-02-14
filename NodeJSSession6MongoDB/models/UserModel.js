const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstname: String
});

const userModel = mongoose.model('user', schema);

module.exports = userModel;