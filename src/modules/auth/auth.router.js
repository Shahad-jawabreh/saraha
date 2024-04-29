import {Router} from 'express'
import * as authControllar from './auth.controllar.js'
import asyncHandler from './../../services/errorHandlling.js'
import validation from '../../middleware/validation.js';
import { signUpSchema,signInSchema } from './auth.validation.js';
const router = Router();
router.post('/signup',validation(signUpSchema), asyncHandler(authControllar.signUp))
router.post('/signin', validation(signInSchema),asyncHandler(authControllar.signIn))
router.get('/confirmEmail/:token',asyncHandler(authControllar.confirmEmail))
export default router