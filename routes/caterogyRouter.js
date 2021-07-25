const express = require('express')
const categoryRoute = express.Router()
const { create, findAll, findOne, update, createTypeProduct } = require('../controllers/categoryController')
const { loginRequired, adminRequired } = require('../controllers/userController')

// categoryRoute.post('/category/create', loginRequired, adminRequired, create)
categoryRoute.post('/category/create', create)

categoryRoute.get('/categories', findAll)
categoryRoute.get('/category/:id', findOne)
categoryRoute.patch('/category/:id', loginRequired, adminRequired, update)

categoryRoute.post('/type-product/create', createTypeProduct)

module.exports = categoryRoute
