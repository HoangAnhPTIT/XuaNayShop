const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  images: {
    type: [String]
  },
  originalPrice: {
    type: Number,
    default: 0
  },
  promotedPrice: {
    type: Number,
    default: 0
  },

  // discount

  amount: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    enum: [0, 100, 900]
  },
  type: {
    type: String,
    enum: ['OLD', 'NEW', 'GIFT', 'OTHER'] // Reference typeProduct
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'categories'
  }],
  quantityPurchased: {
    type: Number,
    required: true,
    default: 0
  },
  childType: {
    type: String,
    enum: ['A', 'B', 'C']
  }
}, { timestamps: true })

const productModel = mongoose.model('products', productSchema);

module.exports = productModel
