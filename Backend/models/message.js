const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {type: String, required: true},
    time: {type: Date, default: Date.now}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;