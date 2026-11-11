const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const fetchuser = require('../middleware/fetchuser')

router.post('/updatecart', fetchuser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id })
  userData.cart = JSON.stringify(req.body.cartitems)
  await User.findOneAndUpdate({ _id: req.user.id }, { cart: userData.cart })
  res.json({ success: true })
})

router.post('/getcart', fetchuser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id })
  res.json(JSON.parse(userData.cart || '{}'))
})




router.post('/signup', async (req, res) => {
  try {
    let existingUser = await User.findOne({ email: req.body.email })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'This email is already registered',
      })
    }

    // build an empty cart with 300 slots, each starting at 0
    let cart = {}
    for (let i = 0; i < 300; i++) {
      cart[i] = 0
    }

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cart: JSON.stringify(cart), // matches your schema's cart: String
    })

    await user.save()

    const data = {
      person: {
        id: user.id,
      },
    }

    const token = jwt.sign(data, 'secretecom')

    res.json({ success: true, token })

  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: err.message })
  }
})




router.post('/login', async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username })

    if (!user) {
      return res.status(400).json({
        success: false,
        error: 'User not found!',
      })
    }

    if (user.password === req.body.password) {
      const data = {
        person: {
          id: user.id,
        },
      }
      const token = jwt.sign(data, 'secretecom')

      return res.json({
        success: true,
        token,
      })
    } else {
      return res.status(400).json({
        success: false,
        error: 'Wrong password',
      })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, error: err.message })
  }
})

module.exports = router