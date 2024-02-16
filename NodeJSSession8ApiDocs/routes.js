const express = require('express');
const dbConnect = require('./dbConnect');
const userModel = require('./models/Profile');

const router = express.Router();

router.post('/userInfo', async (req, res) => {
    await dbConnect();
    const {
        username,
        password
    } = req.body;
    try {
        const data = await userModel.create({
            username,
            password
        });
        console.log("data+++++++", data);
        res.status(200).json({
            message: 'User Info saved succesfully',
            data
        })
    } catch (err) {
        res.status(500).json({
            message: 'User Info failed to save'
        })
    }
})

router.get('/user', (req, res) => {
    res.status(200).json({
        message: 'Recieved user'
    })
})

module.exports = router;