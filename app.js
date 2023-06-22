const express = require('express');
const app = express();
const {nearbyByCategory } = require('./api/placesAPI.js');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

nearbyByCategory();

app.use('/api/', (req, res)=>{
    console.log(req.params);
    res.send("Hello world");
});

app.listen(PORT, ()=>{console.log(`App serving at port: ${PORT}`)});