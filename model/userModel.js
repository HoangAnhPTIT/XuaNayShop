const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 30
    // unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 30
  },
  email: {
    type: String,
    required: true,
    // unique: true
  }
}, { timestamps: true });

userSchema.pre('save', function(){
  const hashPassword = bcrypt.hashSync(this.password, saltRounds);
  this.password = hashPassword
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel