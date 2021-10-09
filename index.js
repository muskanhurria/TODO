//Require Express
const express = require('express');
const port = 8000;
const path = require('path');

const db = require('./config/mongoose');
const todo = require('./models/todo');

const app = express();

app.use(express.urlencoded());
app.use('/', require('./routes/index'));
app.use(express.static('assets'));

//setting Up Template Engine
app.set('view engine', 'ejs');
app.set('views', './views');

//firing up server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});