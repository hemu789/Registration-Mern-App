const express = require('express')
const app =express()

app.use(express.json())


// import local modules: db, routes
const dbConnect = require("./config/db")
const userroute = require('./routes/userroute')

app.use('/api/user' , userroute)

app.get('/', (req,res) =>{
    res.send("Home Page")
})

app.listen(5000, ()=>{
    console.log("Server started on port 5000")
})

dbConnect()