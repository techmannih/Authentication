const express=require("express")
const  router= new express.Router()
// // const jwt =require('jsonwebtoken')

const model=require("../models/userModels")
// const { handleUserSignup } = require("../controllers/user")


// router.post('/',handleUserSignup)

// module.exports =router






router.post("/api/sigUp",async (req,res)=>{
    console.log(req.body)
    try{
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({status:'ok'})
    }catch(e){
        res.status({status:'error',error:'Duplicate email'})
    }
})


router.post("/api/login",async (req,res)=>{
  
    
        const user =await user.findOne({
            email:req.body.email,
            password:req.body.password,
        })
     if (user){


        return res.json({status:'ok',user:true})
     } else{
        return res.json({status:'error',user:false})
     }
})