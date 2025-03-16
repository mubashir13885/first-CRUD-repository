const userModel = require("../model/userModel")

const addUser = async(req,res)=>{
    try {
        const{name,email,password,age} = req.body
          const newUser = new userModel({
            name,
            email,
            password,
            age
          })
          await newUser.save()
          return res.status(201).json({message: "user created successfully"})
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "inrternal sserver error"})
        
    }
}
module.exports ={
    addUser
}