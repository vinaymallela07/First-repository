var express = require('express');
var router = express.Router();
var Todo = require("../models/todo");
var mongoose = require("mongoose");
const { db } = require('../models/todo');


 
router.get("/addtask", function(req, res){

    // Get all records.
    // Todo.find(function(err, data){
    //     console.log(data);
    // })
    //Update
    // Todo.find({_id: "5fd0a5e8cbaeda23f859727a" }, function(err, data){

    //     data.todo = false;
    //     data.save();
    //     console.log(err);
    //     console.log(data);
    // });

    //saving
    var todo = new Todo({
        task: "Do something"
    });

    todo.save();
    res.send("Worked");
});

router.post("/deletetask", function(req,res){

});

/*
Search -> get,
New entry -> post,
Update entry -> put,
delete entry -> delete
*/


module.exports = router;
