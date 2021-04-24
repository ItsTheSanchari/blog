const express = require('express')
//middleware
const isAuth = require('../middleware/is-auth')
const validation = require('../middleware/postValidator')
//controller
const feedController = require('../controller/feed')

const router = express.Router()
router.get('/post',isAuth.validateRoute,feedController.getAllFeeds)
router.post('/post',isAuth.validateRoute,validation.feedValidationRules(),validation.validate,feedController.createFeed)
router.post('/details',isAuth.validateRoute,feedController.getFeedDetails)
router.post('/edit',isAuth.validateRoute,feedController.editFeedDetails)
module.exports = router