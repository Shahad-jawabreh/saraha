import userModel from "../../../DB/model/user.model.js"
import cloudinary from "../../services/fileUpload/cloudinary.js";

export const showProfile = async(req,res,next) => {
    const _id = req._id
    const user = await userModel.findById(_id);
    if(user){
        return res.status(200).json({user})
    }
    return res.status(400).json({massege : "not found user"})
}
export const uploadPhoto = async(req,res)=>{
    const _id= req._id;
    const url2 = req.file.path;
    const upload = await cloudinary.uploader.upload(req.file.path,{folder:`${process.env.appname+'/user'}`});
    const upadte = await userModel.findByIdAndUpdate(_id,{profilePhoto:upload.secure_url},{new:true})
    return res.status(200).json({massege :upadte})
}