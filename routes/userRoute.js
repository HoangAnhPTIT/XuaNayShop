const express = require('express')
const { register, sign_in, changeInfo, loginRequired } = require('../controllers/userController')
const userRoute = express.Router()

userRoute.post('/register', register)
userRoute.post('/login', sign_in)
userRoute.patch('/change-info', loginRequired, changeInfo)
module.exports = userRoute
