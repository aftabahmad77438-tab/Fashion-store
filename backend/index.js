
const express = require('express')
const app = express();
const port = 4000;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const multer = require('multer')
const cors = require('cors');
const path = require('path');
app.use(cors());              // ✅ add this
app.use(express.json());
app.use('/images', express.static('upload/images'))

// mongodb+srv://aftabahmad77438_db_user:0d80rM6p3iP2DEEn@cluster0.7hj6spp.mongodb.net/?appName=Cluster0
// aftabahmad77438_db_user
// 0d80rM6p3iP2DEEn

mongoose.connect(`mongodb+srv://aftabahmad77438_db_user:0d80rM6p3iP2DEEn@cluster0.7hj6spp.mongodb.net/?appName=Cluster0`)
app.get('/',(req,res)=>{
    res.send('working,')

})





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

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  })
})

const ProductSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
  
    available:{
        type:Boolean,
        default:true,
    },
    date:{
        type:Date,
    },
    image: {
  type: String,
  required: true,
},
})

const Product = mongoose.model('Product',ProductSchema)


app.post('/addproduct', async (req, res) => {
  try {
    const addproduct = new Product({
      
      name: req.body.name,
      category: req.body.category,
      old_price: req.body.old_price,
      new_price: req.body.new_price,
      image: req.body.image,      
      date: Date.now(),
    });
    await addproduct.save();
    res.json({ success: true, product: addproduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});



app.post('/removeproduct', async (req, res) => {
  try {
    let id = req.body._id;
    const remove = await Product.findByIdAndDelete(id);

    if (!remove) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }

    console.log(remove);
    console.log('product deleted');
    res.json({
      success: true,
      name: remove.name
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/allproduct',async(req,res)=>{
    let allproduct= await Product.find({});
   console.log('all data fetched');
   res.send(allproduct);
})
/////////////////////////////////////user schema/////

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', UserSchema)



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

app.post('/updatecart', fetchuser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id })
  userData.cart = JSON.stringify(req.body.cartitems)
  await User.findOneAndUpdate({ _id: req.user.id }, { cart: userData.cart })
  res.json({ success: true })
})

app.post('/getcart', fetchuser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id })
  res.json(JSON.parse(userData.cart || '{}'))
})




app.post('/signup', async (req, res) => {
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




app.post('/login', async (req, res) => {
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


app.get('/popularinwomen', async (req, res) => {
  try {
    const products = await Product.find({ category: 'women' })
      .sort({ popularity: -1 })
      .limit(4);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/newcollections', async (req, res) => {
  try {
    const products = await Product.find({})
    .sort({_id:-1})
    .limit(8)
     

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(4000,()=>{
    console.log('port working...')
})
