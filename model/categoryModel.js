const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    defalut: ''
  },
  code: {
    type: String,
    defalut: ''
  }
  
}, {timestamps: true})

const categoryModel = mongoose.model('categories', categorySchema)

module.exports = categoryModel
