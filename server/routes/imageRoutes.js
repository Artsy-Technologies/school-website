import express from 'express'
import multerMiddleware from '../middlewares/multer.js'
import {
  addImage,
  getAllImages,
  getImageByID,
  updateImage,
  deleteImage,
} from '../controllers/imageController.js'

const router = express.Router()

// Add a new image
router.post('/images', multerMiddleware.single('file'), addImage)

// Get all images
router.get('/images', getAllImages)

// Get image by ID
router.get('/images/:id', getImageByID)

// Update an existing image
router.put('/images/:id', multerMiddleware.single('file'), updateImage)

// Delete an image
router.delete('/images/:id', deleteImage)

export default router
