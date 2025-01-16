const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const TodoModel = require('./Models/Todo')
const DoneModel = require('./Models/done')

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb://127.0.0.1:27017/test`)

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=> res.json(err))
})

app.get('/getdone',(req,res)=>{
    DoneModel.find()
    .then(result=>res.json(result))
    .catch(err=> res.json(err))
})



app.put('/update/:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id : id},{done:true})
    .then(result=>res.json(result))
    .catch(err=> res.json(err))
})

app.post('/add',(req, res)=>{
    const task =req.body.task;
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})

app.post('/done',(req,res)=>{
    const task =req.body.task;
    DoneModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/deleteDone/:id',(req,res)=>{
    const {id} = req.params;
    DoneModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.listen(3000,()=>{
    console.log("server is runnung")
})
