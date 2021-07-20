const mongoose = require('mongoose');
const { Schema } = mongoose;

const typeProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ''
  },
  code: {
    type: String,
    required: true,
    default: ''
  }
})

const typeProductModel = mongoose.model('type_product', typeProductSchema)

module.exports = typeProductModel
