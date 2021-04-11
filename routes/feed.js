const express = require('express')
const validation = require('../middleware/postValidator')

//controller
const feedController = require('../controller/feed')

const router = express.Router()
router.get('/post',feedController.getAllFeeds)
router.post('/post',validation.feedValidationRules(),validation.validate,feedController.createFeed)
module.exports = router