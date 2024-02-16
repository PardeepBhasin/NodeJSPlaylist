const mongoose = require('mongoose');
if (!process.env.MONGOURI) {
    throw new Error("Mongo URI not available");
}

let connection;
async function dbConnect() {
    if (connection) {
        return;
    }
    try {
        connection = await mongoose.connect(process.env.MONGOURI);
    } catch (err) {
        console.log("Error", err);
    }
}

module.exports = dbConnect;