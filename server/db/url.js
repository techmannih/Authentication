// const mongoose =require('mongoose')

// async function connectToMongoose(url){
//     return mongoose.connect(url)
// }

// module.exports={connectToMongoose,}

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/short-url")
.then(()=>{
    console.log("connection successful ShortId")
}).catch((e)=>{
    console.log("connection not successful ShortId")
})
