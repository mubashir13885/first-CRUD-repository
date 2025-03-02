const express = require('express')
const { getUsers, addUsers, deleteUser, searchUser, userUpdate } = require('../controllers/userControllers')

const userRoutes = express.Router()



userRoutes.get("/getusers",getUsers)

    
userRoutes.post("/adduser",addUsers)


userRoutes.delete("/deleteuser/:userid",deleteUser)
userRoutes.get("/searchuser",searchUser)
userRoutes.put("/updateuser/:userId",userUpdate)

module.exports = userRoutes