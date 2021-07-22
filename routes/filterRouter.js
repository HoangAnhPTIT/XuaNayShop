const express = require('express')
const filterRouter = express.Router()
const {search} = require('../controllers/filterController')

filterRouter.get('/search', search)


module.exports = filterRouter