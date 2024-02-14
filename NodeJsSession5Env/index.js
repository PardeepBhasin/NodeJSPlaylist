const express = require('express');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    res.send('Node JS Session Day 5');
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server started on port ' + port));