const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const adminRouter = require('./routes/adminRouter');
const studentsRoutes = require('./routes/studentsRoutes')
const imageRoutes = require('./routes/imageRoutes')
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

app.use('/api', imageRoutes)
app.use('', adminRouter)
app.use('', studentsRoutes)


app.listen(port, async () => {
    await connectDB()
    console.log(`server is running ${port}`);
})
