const express = require('express');
const { getDirections } = require('./src/directionsAPI');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

getDirections('41.98565912093936,-71.33187441505908', '41.98087454727725,-71.34011404873675')
    .then((res)=>{console.log(res)});

app.use('/api/directions/:from/:to', (req, res)=>{
    console.log(req.params);
    res.send("Response example");
});

app.listen(PORT, ()=>{console.log(`App serving at port: ${PORT}`)});