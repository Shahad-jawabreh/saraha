import express from 'express';
import appInit from './appInit.js';
import 'dotenv/config'
const app = express();

appInit(app,express)

app.listen(process.env.PORT,()=>{
    console.log(`listening on ${process.env.PORT}`)
})