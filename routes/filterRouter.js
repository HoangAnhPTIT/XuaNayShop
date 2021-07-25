const express = require('express')
const filterRouter = express.Router()
const {search, sort} = require('../controllers/filterController')

filterRouter.get('/search', search)
filterRouter.get('/sort', sort)


module.exports = filterRouter