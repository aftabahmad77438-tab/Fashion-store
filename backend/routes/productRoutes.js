const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/addproduct', async (req, res) => {
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



router.post('/removeproduct', async (req, res) => {
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

router.get('/allproduct',async(req,res)=>{
    let allproduct= await Product.find({});
   console.log('all data fetched');
   res.send(allproduct);
})

router.get('/popularinwomen', async (req, res) => {
  try {
    const products = await Product.find({ category: 'women' })
      .sort({ popularity: -1 })
      .limit(4);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/newcollections', async (req, res) => {
  try {
    const products = await Product.find({})
    .sort({_id:-1})
    .limit(8)


    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router