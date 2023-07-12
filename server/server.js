const express = require("express")
const app= express()
const port= process.env.PORT || 2345
const cors =require("cors")
require("./db/conn")
require('./db/url')
// const {connectToMongoose} =require('./db/url')
// // const MensRanking=require("./models/mens");
// const { default: mongoose } = require("mongoose");
const router = require("./routes/User");

const urlRoute=require ('./routes/url')
app.use(cors())
app.use(express.json())
app.use('./url',urlRoute)

app.use(router)

app.post("/api/register",(req,res)=>{
  console.log(req.body)
    res.send({status:'ok'})
})


app.listen(port,()=>{
    console.log(`server start at ${port}`)
})