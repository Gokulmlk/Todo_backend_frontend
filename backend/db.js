const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://enamtech22:da7KL7eSfdDjoRZM@cluster0.u6wbgxm.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos', todoSchema)

module.exports={
    todo
}
