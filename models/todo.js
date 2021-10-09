//Require Moongoose
const mongoose = require('mongoose');

// Mongo Schema
const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;
