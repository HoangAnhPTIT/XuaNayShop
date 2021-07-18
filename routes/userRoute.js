const express = require('express')
const { register } = require('../controllers/userController')
const userRoute = express.Router()

userRoute.post('/register', (req, res) => register(req, res))

module.exports = userRoute