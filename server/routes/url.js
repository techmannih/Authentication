const express =require('express')

const router=express.Router();
const { handleGenenrateNewShortURL } =require ("../controllers/url")

router.post("/",handleGenenrateNewShortURL )

module.exports=router;