const Image = require('../libs/models/Image')
const path = require('path')

// Add a new image
exports.addImage = async (req, res) => {
  try {
    const image = new Image({
      image: req.file.path, // Ensure you're using multer to handle file uploads
      title: req.body.title,
    })
    await image.save()
    res.status(201).json(image)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get all images
exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find()
    res.status(200).json(images)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update an existing image
exports.updateImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id)
    if (!image) {
      return res.status(404).json({ message: 'Image not found' })
    }

    if (req.file) {
      image.image = req.file.path
    }
    if (req.body.title) {
      image.title = req.body.title
    }

    await image.save()
    res.status(200).json(image)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete an image
exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndDelete(req.params.id)
    if (!image) {
      return res.status(404).json({ message: 'Image not found' })
    }
    res.status(200).json({ message: 'Image deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
