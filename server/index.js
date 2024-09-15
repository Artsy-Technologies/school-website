import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import adminRouter from './routes/adminRouter.js'
import studentsRoutes from './routes/studentsRoutes.js'
import imageRoutes from './routes/imageRoutes.js'
import connectDB from './libs/databaseConnection.js'
import path from 'path';
import url from 'url';
import gradeRoutes from './routes/gradeRoutes.js'
import testimonialRoutes from './routes/testimonialRoutes.js' 
dotenv.config()

const app = express()
const port = 8000

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cookieParser())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use(
  cors({
    // origin: 'https://school-website-etuj.onrender.com', // allow this origin to access the server
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true, // if your backend requires credentials
  })
)


app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use('/api', imageRoutes)
app.use('/api/admin', adminRouter)
app.use('/api/students', studentsRoutes)
app.use('/api/grades', gradeRoutes);
app.use('/api/testimonials', testimonialRoutes);


app.listen(port, async () => {
  await connectDB()
  console.log(`Server is running on port ${port}`)
})

