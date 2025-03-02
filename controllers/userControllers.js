
let users =[
    { id : 1, name : 'Ajay', age : 26, email : 'ajay@gmail.com'},
    { id : 2, name : 'vishnu' , age : 25, email : 'vishnu@gmail.com'}
]



const getUsers = (req,res)=>{
    res.json({message : 'users fetched',users})
    }
const addUsers = (req,res)=>{
        try {
            console.log(req.body,"req.body")
        users.push(req.body)
        res.status(201).json({message:"user Added succesfully",users})
        } catch (error) {
            res.status(error.code || 500).json({error : error.message || "internel server error"})
        }
    
        
    }

const deleteUser = (req,res) => {
       try {
        console.log(req.params.userid,"id");
        users = users.filter((user)=>user.id!= req.params.userid)
        res.status(204).json({message :"User Deleted",users})
       } catch (error) {
        res.status(error.code || 500).json({error : error.message || "internel server error"})
       }
        
   }

   const searchUser = (req,res)=>{
    try {
        const { name } = req.query
        const searchResult = users.filter((user) => user.name == name) 
        res.status(200).json(searchResult.length ? searchResult : "No Results Found")
    } catch (error) {
        res.status(error.code || 500).json({error : error.message || "internel server error"})
    }
   }

   const userUpdate = (req,res)=>{
    try {
        const { userId } = req.params
        const { name,email,age } = req.body

        console.log(userId,name,email,age);

        const updatedUsers = users.map((user) => {
          if(user.id == userId){
            user.name = name,
            user.email = email,
            user.age = age
          }
            return user
        })
        res.status(200).json(updatedUsers)

    } catch (error) {
        res.status(error.code || 500).json({error : error.message || "internel server error"})
    }
   }


    module.exports ={
        getUsers,
        addUsers,
        deleteUser,
        searchUser,
        userUpdate
    }