const express = require('express')


const userRoutes = express.Router()
const {addUser} = require("../controllers/userControllers")

userRoutes.post("/adduser",addUser)



module.exports = userRoutes