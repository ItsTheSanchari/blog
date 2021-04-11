const express = require('express')
const dotenv = require('dotenv');
//bodyparser
const bodyparser = require('body-parser')
//mongoose
const mongoose = require('mongoose');
dotenv.config();
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
mongoose.connect(process.env.URI,{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connected')
    app.listen(4000)
}).catch((err) =>{
    console.log('error connecting to db',err)
})
