const { log } = require('console')
const express = require('express')
const userRoutes = require('./routes/userRouts')
const adminRoutes = require('./routes/adminRoutes')
const app = express()


app.use(express.json())

   
app.use("/user",userRoutes)
app.use("/admin",adminRoutes)




app.listen(4000, ()=>{
    console.log("server starts at port 4000");
    
})
 
