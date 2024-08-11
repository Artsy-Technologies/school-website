import express from 'express'
import {
  signUp,
  signIn,
  createFeeTable,
  updateFeeTable,
  deleteFeeTable,
  getAllFees,
} from '../controllers/adminController.js'
import { auth, isAdmin } from '../middleware.js'

const router = express.Router()

router.post('/signUp', signUp)
router.post('/signIn', signIn)
router.get('/dashboard', auth, isAdmin, (req, res) => {
  return res.json({
    status: 200,
  })
})

router.get('/getAllFees', getAllFees)

router.post('/createFeeTable', auth, isAdmin, createFeeTable)

router.post('/updateFeeTable', auth, isAdmin, updateFeeTable)

router.post('/deleteFeeTable', auth, isAdmin, deleteFeeTable)

export default router
