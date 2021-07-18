const express = require('express')
const categoryRoute = express.Router()
const { create, findAll, findOne, update } = require('../controllers/categoryController')

categoryRoute.post('/category/create', create)
categoryRoute.get('/catetory', findAll)
categoryRoute.get('/catetory:id', findOne)
categoryRoute.patch('/catetory:id', update)


module.exports = categoryRoute
