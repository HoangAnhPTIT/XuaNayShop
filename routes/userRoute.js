const express = require('express')
const { register } = require('../controllers/userController')
const userRoute = express.Router()

userRoute.post('/register', register)

module.exports = userRoute
