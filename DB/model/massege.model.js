import  { Schema,model,Types } from "mongoose"
const schema = new Schema({
  content :{
    type : String,
    required : true
  },
  recevidId :{
    type : Types.ObjectId,
    required : true
  }
},{timestamps : true})
const massegeModel = model('massege',schema)
export default massegeModel