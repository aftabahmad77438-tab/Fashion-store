const express = require('express')
const router = express.Router()
const multer = require('multer')
const { v2: cloudinary } = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
})

router.post('/upload', upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: 'No file uploaded' })
  }
  const stream = cloudinary.uploader.upload_stream(
    { folder: 'fashion-store' },
    (error, result) => {
      if (error) {
        return res.status(500).json({ success: 0, message: error.message })
      }
      res.json({ success: 1, image_url: result.secure_url })
    }
  )
  stream.end(req.file.buffer)
})

module.exports = router
