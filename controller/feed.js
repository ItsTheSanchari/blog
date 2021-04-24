const Feed = require("../models/Feed")

exports.getAllFeeds = (req,res,next) => {
    Feed.find({
        'added_by':req.userId
    }).then((allFeeds)=>{
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
exports.getFeedDetails = async(req,res,next) => {
    const feedId = req.body.feedId
    try {
        const feedDetails = await Feed.findById(feedId)
        res.status(200).json({
                feedDetails:feedDetails
            })

    } catch(err) {
        console.log('error occurred while fetching feed deatilis',err)
    }
    res.status(200).json({
        msg:feedId
    })
}
exports.editFeedDetails = async(req,res,next) => {
    const feedId = req.body.feedId
    const feedTitle = req.body.title
    const feedDetails = req.body.desc
    try {
        const feed = await Feed.findOne({
            _id:feedId,
            added_by:req.userId
        })
        if(feed) {
            feed.title = feedTitle
            feed.description = feedDetails
            await feed.save()
            res.status(200).json({
                feedDetails: feed
            })
        } else {
            res.status(500).json({
                msg: 'Feed does not exists!'
            })
        }
    } catch(err) {
        console.log('err',err)
        res.status(500).json({
            msg:'oop! Something went wrong'
        })
    }
    
}
exports.deleteFeed = async(req,res,next) => {
    const feedId = req.body.feedId
    userId = req.userId

    const feed = await Feed.findOne({
        _id:feedId,
        added_by:userId
    })
    if(feed) {
        await feed.remove()
        res.status(200).json({
            msg:'Voila! you have deleted the record'
        })
    } else {
        res.status(404).json({
            msg:'Feed not found'
        })
    }
}