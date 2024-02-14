require('dotenv').config();
const express = require('express');
const dbConnect = require('./dbConnect');
const userModel = require('./models/UserModel');
const app = express();

app.use(express.json());
app.post('/userDetails', async (req, res) => {
    const { firstname } = req.body;
    await dbConnect();
    try {
        const user = await userModel.create({ firstname });
        console.log("+++++++++++++user", user)
        res.status(200).json({ message: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong', err });
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});