const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    title:String
})
const Task=mongoose.model('tasks',TaskSchema)

module.exports=Task