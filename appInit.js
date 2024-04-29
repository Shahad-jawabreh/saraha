import  connection  from './DB/connection.js';
import massegeRouter from './src/modules/massege/massege.router.js'
import authRouter from './src/modules/auth/auth.router.js'
import userRouter from './src/modules/user/user.router.js'
import  cors from 'cors'
const appInit = (app,express)=>{
    connection()
    app.use(cors())
    app.use(express.json());
    app.get('/',(req,res)=>{return res.json({massege : "welcom!"})})
    app.use('/user',userRouter)
    app.use('/massege',massegeRouter)
    app.use('/auth',authRouter)
    app.use('*',(req,res)=>{return res.json({massege : "not found page!"})})
}
export default appInit