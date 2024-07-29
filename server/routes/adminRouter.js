const express = require('express');
const { signUp, signIn, createFeeTable } = require('../controlers/adminControler');
const { auth, isAdmin } = require('../middleware');
const router = express.Router();


router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.get('/dashboard', auth, isAdmin, (req, res) => {
   return res.json({
      status: 200
   })
})

router.post('/createFeeTable', auth, isAdmin, createFeeTable);



module.exports = router;