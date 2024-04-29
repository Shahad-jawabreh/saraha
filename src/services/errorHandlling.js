const asyncHandler = (fun)=>{
    return (req,res,next)=>{
        fun(req,res,next).catch(error=>{
                return res.status(400).json({error : error.stack})
        })
    }
}
export default asyncHandler