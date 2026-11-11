const jwt = require('jsonwebtoken')

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) {
    return res.status(401).json({ success: false, error: 'Please authenticate' })
  }
  try {
    const data = jwt.verify(token, 'secretecom')
    req.user = data.person
    next()
  } catch (err) {
    res.status(401).json({ success: false, error: 'Invalid token' })
  }
}

module.exports = fetchuser