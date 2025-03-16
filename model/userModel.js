const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type : String,
        min:3,
        max:10,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        reqired:true
    },
    createdAt:{
        type:Date,
        default:Date.now
        
    }
})

// const userModel = new mongoose.model("users",userSchema)
// module.exports = userModel

module.exports = new mongoose.model("users",userSchema)