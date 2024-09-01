import express from 'express';
import multer from 'multer';
import {
  addGrade,
  updateGrade,
  deleteGrade,
  getGrades,
  editGrade
} from '../controllers/gradeController.js';

const router = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure this directory exists and is writable
    cb(null, 'uploads/pdf/');
  },
  filename: (req, file, cb) => {
    const grade = req.body.grade; // Get the grade from request body
    const originalname = file.originalname.split('.'); // Split original filename
    const extension = originalname.pop(); // Get file extension
    const basename = originalname.join('.'); // Get base name without extension

    // Format the new filename as "Grade_<grade>_<descriptor>.<extension>"
    const newFilename = `${grade}_${Date.now()}.${extension}`;
    cb(null, newFilename);
  },
});

const upload = multer({ storage });

// Routes for managing grades
router.post('/add', upload.single('pdf'), addGrade);
router.put('/update/:id', upload.single('pdf'), updateGrade);
router.delete('/delete/:id', deleteGrade);
router.get('/', getGrades);

// Route for editing grades separately if needed
router.patch('/edit/:id', editGrade); // Example route for the editGrade function

export default router;
