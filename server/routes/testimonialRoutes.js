import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
  getTestimonials,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
  acceptRejectTestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/testimonials';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`); // Unique filename
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit to 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'), false);
    }
  }
});

// Routes
router.get('/', getTestimonials);
router.post('/', upload.single('imageSrc'), addTestimonial);
router.put('/:id', upload.single('imageSrc'), updateTestimonial);
router.delete('/:id', deleteTestimonial);
router.patch('/:id/accept-reject', acceptRejectTestimonial);

export default router;
