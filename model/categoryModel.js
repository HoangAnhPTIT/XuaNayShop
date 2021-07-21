const mongoose = require('mongoose');
const { Schema } = mongoose;

const refProduct = 'products id title images originalPrice promotedPrice amountquantityPurchased name type'


const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    defalut: ''
  },
  code: {
    type: String,
    // unique: true,
    default: ''
  },
  product: [{
    type: Schema.Types.ObjectId,
    ref: 'products'
  }]
  
}, {timestamps: true})

const categoryModel = mongoose.model('categories', categorySchema)

module.exports = categoryModel
