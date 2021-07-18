const bcrypt = require('bcrypt');
const saltRounds = 10;

const { userModel } = require('../model/index')



async function register(req, res) {
  let body = req.body
  let userReq = {
    username: body.username,
    password: body.password,
    email: body.email
  }
  const user = new userModel(userReq);
  await user.save(function (err, user) {
    if (err) res.json(err)
    res.json(user);
  });
}

module.exports = {
  register
}