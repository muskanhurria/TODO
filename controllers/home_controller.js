const todo = require('../models/todo');

//getting data for database
module.exports.home = function(req, res){
    todo.find({}, function(err, todo_list){
        if(err){
            console.log(err);
        }
        return res.render('home', {
            title: "TODO List",
            todo_list: todo_list
        });
    });
    
}

//to add a task
module.exports.create = function(req, res){
    console.log(req.body);
    todo.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTask){
        if(err){
            console.log('Error in creating new task!');
            return;
        }
        console.log('***********', newTask);
        return res.redirect('back');
    });
}

//to delete a task
module.exports.delete = function(req, res){
    for(let i in req.body){
        todo.findByIdAndDelete(req.body[i], function(err){
            if(err){
                console.log('error in deleting an object from databse');
                return;
            }
            console.log(req.body[i]);
            return res.redirect('back');
        });
    }
}