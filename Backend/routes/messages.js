const Message = require('../models/message');
const express = require('express');
const router = express.Router();

router.post('/message', async (req,res)=>{
    try{
        const message = new Message({
            message:"this is my first message"
        });
        await message.save()

        return res.send(message);
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}`);
    }
});

module.exports = router