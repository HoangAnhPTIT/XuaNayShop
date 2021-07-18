const { userModel } = require('../model/index')

async function register(req, res) {
  let body = req.body
  let userReq = {
    username: body.username,
    password: body.password,
    email: body.email
  }
  const user = new userModel(userReq);
  await user.save(function (err, data) {
    if (err) res.json(err)
    res.json(data);
  });
}

module.exports = {
  register
}
