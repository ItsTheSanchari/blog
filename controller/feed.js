const Feed = require("../models/Feed")

exports.getAllFeeds = (req,res,next) => {
    Feed.find({}).then((allFeeds)=>{
        res.status(200).json(allFeeds)
    })
    
}
exports.createFeed = (req,res,next) => {
    const title = req.body.title
    const description = req.body.description
    const feed = new Feed({
        title:title,
        description:description,
        created_at:Date.now(),
        updated_at:Date.now(),
        added_by:req.userId
    })
    feed.save().then((createdFeed) => {
        if(createdFeed) {
            res.redirect('/feed/post')
        }
    })
}