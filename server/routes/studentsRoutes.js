import express from 'express'
import { admission, contacts, getAdmission, getContactStudentsData } from '../controllers/studentsController.js'

const router = express.Router()

router.post('/contacts', contacts)
router.get('/getAdmission',getAdmission);
router.post('/admission', admission);
router.get('/getContactStudentsData',getContactStudentsData)

export default router
