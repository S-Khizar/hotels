const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique :true
    },
    description:{
        type :String,

    },
    priority:{
        type:String,
        enum:["high","medium","low"]
    },
    dueDate:{
        type:Date,
        required:true

    }

})

const Task = mongoose.model('Task',TaskSchema);
module.exports =Task;