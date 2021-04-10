const express = require('express')
//bodyparser
const bodyparser = require('body-parser')

//feed routes
const feedRoutes = require('./routes/feed')
const app = express()
app.use(bodyparser.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next()
})
app.use('/feed',feedRoutes)
app.listen(4000)