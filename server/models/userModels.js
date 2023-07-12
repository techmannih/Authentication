const mongoose =require("mongoose")

const User=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,


    },
    email:{
        type:String,
        required:true,
        unique:true,

    },

    
    password:{
        type:String,
       required :true,
      }, 

    quote:{
        type:String,
        required:true,
    },
},
     {collection:'user-data'},
     {timestamps:true},
     
     )

const model=new mongoose.model("UserData",User)
module.exports=model