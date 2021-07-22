const mongoose = require('mongoose');
const { Schema } = mongoose;

const slideInfoSchema = new Schema({
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

const slideInfoModel = mongoose.model('slideInfo', slideInfoSchema)

module.exports = slideInfoModel
