const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/User-Auth")
.then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("connection not successful")
})

// export default mongoose;