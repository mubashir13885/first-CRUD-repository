const mongoose = require('mongoose')


const connectDb = async()=>{
try {
   await mongoose.connect("mongodb+srv://mubashirrahman13885:D93YdzP1Xclusz8P@cluster0.0o2sp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("db connection successfull");
    
} catch (error) {
 console.log(error);
    
}
}
module.exports = {connectDb}