const express = require('express');
const app = express();
const router = require('./routes');

app.use('/api', router);
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});