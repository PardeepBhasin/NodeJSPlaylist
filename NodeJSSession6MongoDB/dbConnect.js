const mongoose = require('mongoose');
if (!process.env.MONGO_URI) {
    console.log("Please set the MONGO_URI environment variable");
    return;
}

let connection;
async function dbConnect() {
    if (connection) return;
    try {
        connection = await mongoose.connect(process.env.MONGO_URI);
    } catch (err) {
        console.log(err);
    }
}

module.exports = dbConnect;