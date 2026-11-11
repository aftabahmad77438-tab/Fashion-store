const mongoose = require('mongoose')

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

module.exports = Product