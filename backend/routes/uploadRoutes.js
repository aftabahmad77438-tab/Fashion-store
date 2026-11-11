const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const port = process.env.PORT || 4000

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const upload = multer({ storage })

router.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  })
})

module.exports = router