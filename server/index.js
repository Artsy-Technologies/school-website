const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const adminRouter = require('./routes/adminRouter')


const app = express();
const port = 8000;

// here we call database connection function 

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin: 'https:localhost:5173',
    optionsSuccessStatus: 200,
    preflightContinue: true,
    credentials: true,
    allowedHeaders: "Content-Type , Authorization",
}));

app.use('', adminRouter)


app.listen(port, () => {
    console.log(`server is running ${port}`);
})
