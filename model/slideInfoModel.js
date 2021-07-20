const mongoose = require('mongoose');
const { Schema } = mongoose;

const sileInfoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  linkA: {
    type: String,
    required: true
  },
  linkB: {
    type: String
  },
  image: {
    type: String,
    required: true
  }
})

const slideInfo = mongoose.model('slideinfo', sileInfoSchema)
module.exports = slideInfo