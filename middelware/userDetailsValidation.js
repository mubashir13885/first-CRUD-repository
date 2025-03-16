const validationmiddleware = (req,res)=>{
    try {
        const {name,eamil,age} = req.body
        if(!name || !eamil || age){
            return res.status(400).json({message:"All feils are required"})
        }
        next()
    } catch (error) {
        console.log(error);
        res.status(error.code || 500).json({error:error.message||"internel server error"})
    
        
    }
}
module.exports ={
    validationmiddleware

}