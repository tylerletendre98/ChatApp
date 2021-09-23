const mongoURI = require('../config/default')
const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(
        mongoURI,
        {useNewUrlParser: true, useUnifiedTopology:true})
        .then(()=>console.log('Connected to MongoDB...'))
        .catch((err)=>{
            console.log(`Could not connect to MongoDB. ERROR:${err}`);
        process.exit(1);
        });

}

module.exports = connectDB;