import { Router } from "express";
import authorization from '../../middleware/authorization.js'
import asyncHandler from './../../services/errorHandlling.js'
import * as userControllar from './user.controllar.js'
import fileUpload, { typeOfFile } from "../../services/fileUpload/multer.js";
const router = new Router();
router.get('/profile',authorization,asyncHandler(userControllar.showProfile))
router.patch('/fileUpload',fileUpload(typeOfFile.pdf).single('image'),authorization,asyncHandler(userControllar.uploadPhoto))
export default router