
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()
const port = process.env.PORT || 4000

const allowedOrigins = [
  "https://fashion-store-frontend-topaz.vercel.app",
  "https://fashion-store-admin-chi.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
]

const previewPattern =
  /^https:\/\/fashion-store-(frontend|admin)-[a-z0-9-]+-aftabahmad77438-tabs-projects\.vercel\.app$/

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin) || previewPattern.test(origin)) {
      return cb(null, true)
    }
    return cb(new Error("Not allowed by CORS"))
  },
  credentials: true,
}))
app.use(express.json())
app.use('/images', express.static('upload/images'))

connectDB()

app.get('/', (req, res) => {
  res.send('working')
})

app.use('/', require('./routes/uploadRoutes'))
app.use('/', require('./routes/productRoutes'))
app.use('/', require('./routes/userRoutes'))

if (!process.env.VERCEL) {
  app.listen(port, () => console.log('port working...'))
}

module.exports = app
