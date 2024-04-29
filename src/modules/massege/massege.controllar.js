import massegeModel from "../../../DB/model/massege.model.js"
import userModel from "../../../DB/model/user.model.js"

export const getMasseges = async(req,res)=>{
    const _id = req._id
    const massges = await massegeModel.find({recevidId:_id}).select('content')
    if(!massges.length)return res.json({massege : "no massege found"})
    return res.json({massege : massges})
}
export const sendMassge = async(req,res)=>{
    const {recevidId} = req.params 
    const {massege} = req.body;
    const checkUser = await userModel.findById(recevidId)
    if(!checkUser)return res.json({massege : "user recive is not exist"})
    const massegeCreate = await massegeModel.create({content:massege,recevidId})
    return res.json({massege : "sent successfully"})
}