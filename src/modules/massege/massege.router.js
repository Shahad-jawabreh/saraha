import {Router} from 'express' 
import * as massegeController from './massege.controllar.js'
import authorization from '../../middleware/authorization.js'
const router = Router()
router.get('/', authorization , massegeController.getMasseges)
router.post('/:recevidId', massegeController.sendMassge)
export default router
