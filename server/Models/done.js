const mongoose = require('mongoose')

const DoneSchems = new mongoose.Schema({
    task:String,
    time:String

})

const DoneModel = mongoose.model("dones",DoneSchems)
module.exports = DoneModel