const express = require('express')
const homepageRoute = express.Router()
const { getFullData } = require('../controllers/homePageController') 
const { getProductByType } = require('../controllers/collectionController')
homepageRoute.get('/homepage', getFullData)
homepageRoute.get('/collection', getProductByType)

module.exports = homepageRoute