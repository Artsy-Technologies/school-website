const express = require('express');
const { signUp, signIn, createFeeTable, updateFeeTable, deleteFeeTable, getAllFees } = require('../controlers/adminControler');
const { auth, isAdmin } = require('../middleware');
const router = express.Router();


router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.get('/dashboard', auth, isAdmin, (req, res) => {
   return res.json({
      status: 200
   })
})

router.get('/getAllFees', getAllFees)

router.post('/createFeeTable', auth, isAdmin, createFeeTable);

router.post('/updateFeeTable', auth, isAdmin, updateFeeTable);

router.post('/deleteFeeTable', auth, isAdmin, deleteFeeTable);


module.exports = router;