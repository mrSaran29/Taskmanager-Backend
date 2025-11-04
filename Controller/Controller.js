const Task=require('../Schema')

const getUser=async(req,res)=>{
       try {
        const getdata=await Task.find()
        res.status(200).json({message:getdata})
        
       } catch (error) {
        res.status(500).json({message:'internal server error'})
       }

}
const postUser=async(req,res)=>{
       try {
              const data =req.body
              const adddata=await Task.create(data)
              console.log(adddata)
              res.status(200).json({message:'data created'})
       } catch (error) {
              res.status(500).json({message:'internal server error'})
       }

}

const putUser=async(req,res)=>{
       try {
          const id=req.params.id 
          const data=req.body
          const putdata=await Task.findByIdAndUpdate(id,data,{new:true})  
          res.status(200).json({message:'updated successfully'})
       } catch (error) {
              res.status(500).json({message:'internal server error'})
       }
}
const deleteUser=async(req,res)=>{
       try {
            const id=req.params.id
            
            const deletedata=await Task.findByIdAndDelete(id)
            res.status(200).json({message:'deleted successfully'}) 
       } catch (error) {
              res.status(500).json({message:'internal server error'})
       }

}
module.exports={getUser,postUser,putUser,deleteUser}