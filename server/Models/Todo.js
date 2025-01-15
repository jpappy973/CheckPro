const mongoose = require('mongoose')

const TodoSchems = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false,
        
    }
})

const TodoModel = mongoose.model("todos",TodoSchems)
module.exports = TodoModel