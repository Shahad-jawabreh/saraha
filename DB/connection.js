import mongoose from 'mongoose';
const connection =()=>{
    mongoose.connect(process.env.connection).then(()=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log("err");
    })
}
export default connection