const express = require('express');
const app = express();
const { thriftsWithinRadius } = require('./api/placesAPI.js');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

thriftsWithinRadius([41.988721379924996, -71.33801148811348], 20000)
    .then(result => {
        console.log(result);
    });

app.use('/api/', (req, res) => {
    console.log(req.params);
    res.send("Hello world");
});

app.listen(PORT, () => { console.log(`App serving at port: ${PORT}`) });