const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();


const app = express();
const port = 8000;

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})
 