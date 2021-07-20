const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
}, {timestamps: true})

const roleModel = mongoose.model('role', roleSchema)
module.exports = roleModel
