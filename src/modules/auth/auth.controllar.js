import userModel from './../../../DB/model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import sendEmail from '../../services/sendEmail.js';
let user ;
export const signUp = async(req,res,next)=>{
        const {email,password,userName} = req.body
        const checkUser = await userModel.findOne({email})
        if(!checkUser){
            const hashPassword = await bcrypt.hash(password,10)
             user = new userModel({email,password:hashPassword,userName,confirmEmail:true})
            var token = jwt.sign({_id:user._id},process.env.secretKey,{expiresIn:60*60});
            await sendEmail(email,token,req);
            return res.status(200).json({massege : "welcom ,we will add you but please confirem email"})
        }
        //return res.status(400).json({massege : "this user already exists"})
        return next(new Error("this user already exists"));
}

export const signIn = async(req, res,next) => {
    const {email, password} = req.body ;
    const user = await userModel.findOne({email})
    console.log(user)
    if(user) {    
        if(user.confirmEmail=="false")return res.json({massege : "your email not confirm"})
       if(await bcrypt.compare(password,user.password)){
        var token = jwt.sign({_id:user._id},process.env.secretKey,{expiresIn:'1h'});
        return res.status(200).json({massege : "Welcome!",token})
       }
       return res.status(400).json({massege : "password or email not correct"})
    }
   // return res.status(400).json({massege : "this email does not exist"})
    return next(new Error("this email does not exist"));
}

export const confirmEmail = async(req, res, next) => {
    const {token} = req.params ;
    let decode = await jwt.verify(token,process.env.secretKey)
    await user.save();
    return res.json({massege : "success"})
}

