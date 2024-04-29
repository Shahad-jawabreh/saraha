import { Schema,model }  from "mongoose";
const schema = new Schema({
    userName :{
      type : String,
      required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
      },
    password : {
      type : String,
      required : true
    },
    age : Number,
    gender : {
        type : String,
        enum :["male", "female"],
    },
    confirmEmail : {
        type : String,
        default : false
    },
    profilePhoto : {
      type : String
    }

    
  },{timestamps : true})

const userModel = model('user',schema)
export default userModel