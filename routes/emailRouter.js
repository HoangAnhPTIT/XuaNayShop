const express = require('express')
const sendEmailRouter = express.Router()
const {sendEmail} = require('../controllers/sendEmailController')

sendEmailRouter.post('/send-email', sendEmail)

module.exports = sendEmailRouter