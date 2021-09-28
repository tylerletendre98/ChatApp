const Message = require('../models/message');
const express = require('express');
const router = express.Router();

router.post('/message', async (req,res)=>{
    try{
        const message = new Message({
            message: req.body.message
        });
        await message.save()

        return res.send(message);
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}`);
    }
});

router.get('/messages', async (req,res)=>{
    try{
        const messages = await Message.find();
        return res.send(messages);
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}`);
    }
})

router.get('/:id', async (req,res)=>{
    try{
        const message = await Message.findById(req.params.id);

        if(!message) return res.status(400).send(`The message with the ID ${req.params.id} does not exist.`);

        return res.send(message);
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}`);
    }
})
module.exports = router