const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({

    item: {
        type: String, 
        required: true
    }

}, { timestamps: true });

const Item = mongoose.model('Item', todoSchema);
module.exports = Item;
