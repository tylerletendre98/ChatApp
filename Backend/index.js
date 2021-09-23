const express = require('express');
const app = express();
const connectDB= require('./startup/db')

connectDB();

app.listen(5000, function(){
    console.log('Server started. Listening on port 5000')
});