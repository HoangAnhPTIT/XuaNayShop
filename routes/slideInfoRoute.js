const express = require('express')
const slideInfoRoute = express.Router()
const { index, create, findOne, update } = require('../controllers/slideInfoController')
const { loginRequired } = require('../controllers/userController')
slideInfoRoute.get('/slideinfos', index)
slideInfoRoute.get('/slideinfo/:id', findOne)
slideInfoRoute.post('/slideinfo/create', loginRequired, create)
slideInfoRoute.patch('/slideinfo/:id', loginRequired, update)



module.exports = slideInfoRoute