import jwt from 'jsonwebtoken'
import userModel from '../../DB/model/user.model.js';
const authorization = async(req, res, next) => {
   try{
    const {authorization} = req.headers;
    if(authorization.startsWith(process.env.brear)){
       const token = authorization.split(process.env.brear)[1];
       let decode = await jwt.verify(token,process.env.secretKey)
       let _id =await userModel.findById(decode._id).select('_id')
       req._id = _id
       next();
    }
    else
    return res.status(400).json({massege : "brear not correct"})
   }
   catch(err) {
    return res.status(400).json({massege :err.stack})
   }
}
export default authorization