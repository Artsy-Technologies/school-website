const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const adminRouter = require('./routes/adminRouter');
const connectDB = require('./libs/databaseConnection');


const app = express();
const port = 8000;


app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));



app.use(cors({
    origin: 'http://localhost:5173', // allow this origin to access the server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // if your backend requires credentials
}));


app.use('', adminRouter)


app.listen(port, async () => {
    await connectDB()
    console.log(`server is running ${port}`);
})
