const shortid=require("shortid")
const URl =require("../models/url")


async function handleGenerateNewShortURL(req,res){
 const body =req.body;
 if(!body.url) return res.status(400).json({error:'url is required'})
 const shortID=shortid(8);
 await URL.create({
    shortId:shortID,
    redirectURL:[],

 })
 return res.json({id :shortID})


}

module.exports={
   handleGenerateNewShortURL,
}