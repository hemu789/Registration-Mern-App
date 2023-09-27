const mongoose = require("mongoose")

const dbConnect =()=>{
    mongoose.connect("mongodb+srv://cforcoding:admin123@cluster0.dno8sxd.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then( ()=>{
        console.log("DB Connected")
    })
    .catch( (e)=>{
        console.log(e)
    })
}

module.exports = dbConnect