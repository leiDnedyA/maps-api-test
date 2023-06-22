const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(PORT, ()=>{console.log(`App serving at port: ${PORT}`)});