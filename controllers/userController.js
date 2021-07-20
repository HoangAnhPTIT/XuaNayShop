const { userModel } = require('../model/index')
const jwt = require('jsonwebtoken')
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

async function sign_in(req, res) {
  userModel.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({ token: jwt.sign({ email: user.email, name: user.name, _id: user._id, role: user.role }, 'RESTFULAPIs', { expiresIn: '1h' }) });
      }
    }
  });
}

async function changeInfo(req, res) {
  const _id = req.user._id;
  const userInfo = req.body.user;
  await userModel.updateOne({ _id: _id }, userInfo, (err, user) => {
    if (err) res.json(err);
    else
      return res.json({ token: jwt.sign({ email: user.email, name: user.name, _id: user._id, role: user.role }, 'RESTFULAPIs', { expiresIn: '1h' }) });
  });
}

function loginRequired(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};

async function adminRequired(req, res, next) {

  const id = req.user._id;
  const userLogin = await userModel.findById({ _id: id })
  if (userLogin.role === "ADMIN")
    next();
  else {
    return res.status(401).json({ message: 'User not permission !!!' });
  }
};

module.exports = {
  register,
  sign_in,
  loginRequired,
  changeInfo,
  adminRequired
}
