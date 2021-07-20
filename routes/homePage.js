const express = require('express')
const homePageRoute = express.Router()
const { getFullData } = require('../controllers/homePageController')

homePageRoute.get('/homepage', getFullData)

module.exports = homePageRoute