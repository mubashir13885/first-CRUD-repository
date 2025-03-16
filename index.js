const { log } = require('console')
const express = require('express')
const userRoutes = require('./routes/userRouts')
const adminRoutes = require('./routes/adminRoutes')
const { connectDb } = require('./config/dbConnection')
const app = express()


app.use(express.json())
connectDb()
   
app.use("/user",userRoutes)
app.use("/admin",adminRoutes)



app.listen(5000, ()=>{
    console.log("server starts at port 5000");
})
 
// D93YdzP1Xclusz8P