const mongoose = require('mongoose')
const schema = mongoose.Schema

const FeedSchema = new schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    created_at: {
        type:Date,
        required:true
    },
    updated_at: {
        type:Date,
        required:true
    },
    added_by : {
        type: schema.Types.ObjectId,
        required:true
    }
})
module.exports = mongoose.model('Feed',FeedSchema)