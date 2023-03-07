const express = require('express');

const app = express();


// middleware for parsing json data
app.use(express.json());



app.listen(8500, () => {
    console.log('Connected!');
});