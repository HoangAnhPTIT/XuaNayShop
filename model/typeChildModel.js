const mongoose = require('mongoose')
const { Schema } = mongoose

const typeChildSchema = new Schema({
  typeChild: {
    type: String,
    required: true
  },
  typeParent: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'categories'
  }
})

const typeChildModel = mongoose.model('typeChilds', typeChildSchema)
module.exports = typeChildModel