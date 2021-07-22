const express = require('express')
const productRouter = express.Router()
const { create, findAll, findOne, update } = require('../controllers/productController')
const { loginRequired, adminRequired } = require('../controllers/userController')
// productRouter.post('/product/create', loginRequired, adminRequired, create)
productRouter.post('/product/create', create)

productRouter.get('/products', findAll)
productRouter.get('/product/:id', findOne)
productRouter.patch('/product/:id', loginRequired, adminRequired, update)

module.exports = productRouter