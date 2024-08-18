import express from 'express'
import { contacts, getContactStudentsData } from '../controllers/studentsController.js'

const router = express.Router()

router.post('/contacts', contacts)
router.get('/getContactStudentsData',getContactStudentsData)

export default router
