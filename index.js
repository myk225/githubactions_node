const express=require('express');
const app=express();
require('dotenv').config();
let port= process.env.PORT ?? 5002;

app.get('/health',(req,res)=>{
    res.json({message:"i am healthy"})
})

app.get("/",(req,res)=>{
    res.json({message:"Up and running"})
})

app.listen(port,()=>console.log(`Server Started On ${port}`));
