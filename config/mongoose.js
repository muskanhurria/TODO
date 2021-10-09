//connecting to MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'ERROR CONNECTING TO DATABASE'));

db.once('open', function(){
    console.log('Successfully connected to database');
});