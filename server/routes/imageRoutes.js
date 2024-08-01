const express = require('express')
const router = express.Router()
const multerMiddleware = require('../middlewares/multer')
const {
  addImage,
  getAllImages,
  updateImage,
  deleteImage,
} = require('../controlers/imageController')

// Add a new image
router.post('/images', multerMiddleware.single('image'), addImage)

// Get all images
router.get('/images', getAllImages)

// Update an existing image
router.put('/images/:id', multerMiddleware.single('image'), updateImage)

// Delete an image
router.delete('/images/:id', deleteImage)

module.exports = router
