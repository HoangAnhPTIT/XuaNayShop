const express = require('express')
const categoryRoute = express.Router()
const { create, findAll, findOne, update } = require('../controllers/categoryController')
const { loginRequired, adminRequired } = require('../controllers/userController')

categoryRoute.post('/category/create', loginRequired, adminRequired, create)
categoryRoute.get('/categorys', findAll)
categoryRoute.get('/category/:id', findOne)
categoryRoute.patch('/category/:id', loginRequired, adminRequired, update)


module.exports = categoryRoute
