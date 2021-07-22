const express = require('express')
const slideInfoRoute = express.Router()
const { index, create } = require('../controllers/slideInfoController')

slideInfoRoute.get('/slideinfos', index)
slideInfoRoute.post('/slideinfo/create', create)

module.exports = slideInfoRoute