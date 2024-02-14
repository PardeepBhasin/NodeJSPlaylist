const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/test', (req, res) => {
    const { username } = req.body;
    res.send(`Hello ${username}`);
})

module.exports = router;