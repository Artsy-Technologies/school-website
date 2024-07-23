const express = require('express');
const { contacts } = require('../controlers/studentsControler');
const router = express.Router();



router.post('/contacts', contacts);


module.exports = router;