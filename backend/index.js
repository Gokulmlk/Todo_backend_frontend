const express = require("express");
const cors = require("cors");
const { createTodo } = require("./types");
const { todo } = require("./db");
const app = express();


app.use(express.json())
app.use(cors());


app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
});
app.get("/todo", async function(req,res){
    const response = await todo.find({})

    res.json({
        response
    })
});


app.post("/completed", async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000,function(){
    
    console.log("Port is ready")
})