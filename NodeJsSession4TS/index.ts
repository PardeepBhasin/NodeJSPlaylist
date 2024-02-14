import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from tsnode with Day4');
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});