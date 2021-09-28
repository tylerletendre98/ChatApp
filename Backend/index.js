const express = require('express');
const app = express();
const connectDB= require('./startup/db')
const messages = require('./routes/messages')

connectDB();

app.listen(5000, function(){
    console.log('Server started. Listening on port 5000')
});

app.use(express.json());
app.use('/api/messages', messages);
