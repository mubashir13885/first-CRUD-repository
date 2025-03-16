const adminRoutes = require('express').Router()


adminRoutes.get("/profile",(req,res)=>{
    res.status(200).json({messge : "Admin API hitted"})
})

 
module.exports = adminRoutes