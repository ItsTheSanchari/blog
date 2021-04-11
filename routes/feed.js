const express = require('express')

//controller
const feedController = require('../controller/feed')

const router = express.Router()
router.get('/post',feedController.getAllFeeds)
router.post('/post',feedController.createFeed)
module.exports = router