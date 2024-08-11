import express from 'express'
import multerMiddleware from '../middlewares/multer.js'
import {
  addImage,
  getAllImages,
  updateImage,
  deleteImage,
} from '../controllers/imageController.js'

const router = express.Router()

// Add a new image
router.post('/images', multerMiddleware.single('image'), addImage)

// Get all images
router.get('/images', getAllImages)

// Update an existing image
router.put('/images/:id', multerMiddleware.single('image'), updateImage)

// Delete an image
router.delete('/images/:id', deleteImage)

export default router
