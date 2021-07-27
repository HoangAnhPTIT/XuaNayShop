const express = require('express')
const homepageRoute = express.Router()
const { getFullData, getOriginTypeProduct } = require('../controllers/homePageController') 
const { getProductByType } = require('../controllers/collectionController')
homepageRoute.get('/homepage', getFullData)
homepageRoute.get('/collection', getProductByType)
homepageRoute.get('/type-product', getOriginTypeProduct)


module.exports = homepageRoute