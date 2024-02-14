const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World Node js Day 7 with dockerfile');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});