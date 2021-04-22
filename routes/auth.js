const express = require('express')
const router = express.Router()
const authController = require('../controller/auth')
const userValidator = require('../middleware/userValidator')
router.post('/signup',userValidator.userValidationRules(),userValidator.validate,authController.createUser)
router.post('/login',userValidator.validate,authController.login)
module.exports = router