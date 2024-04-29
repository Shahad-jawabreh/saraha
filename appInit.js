import  connection  from './DB/connection.js';
import massegeRouter from './src/modules/massege/massege.router.js'
import authRouter from './src/modules/auth/auth.router.js'
import userRouter from './src/modules/user/user.router.js'
const appInit = (app,express)=>{
    connection()
    app.use(express.json());
    app.use('/user',userRouter)
    app.use('/massege',massegeRouter)
    app.use('/auth',authRouter)
}
export default appInit