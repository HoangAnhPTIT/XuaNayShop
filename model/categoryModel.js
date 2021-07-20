const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ''
  },
  code: {
    type: String,
    default: ''
  }
  
})

const categoryModel = mongoose.model('categories', categorySchema)

module.exports = categoryModel
