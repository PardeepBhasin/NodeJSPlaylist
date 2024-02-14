const express = require('express');

const app = express();

app.use(express.json());
app.get('/pardeep', (req, res) => {
    res.send('Hello World!');
})

app.post('/test', (req, res) => {
    const { username } = req.body;
    res.send(`Hello ${username}`);
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});