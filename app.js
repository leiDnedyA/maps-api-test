const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use('/api/directions/:from/:to', (req, res)=>{
    console.log(req.params);
    res.send("Response example");
});

app.listen(PORT, ()=>{console.log(`App serving at port: ${PORT}`)});