exports.getPost = (req,res,next) => {
    res.status(200).json({
        posts : [{
            name:'first post',

        }]
        
    })
}
exports.createFeed = (req,res,next) => {
    const feed = req.body.feed
    res.status(200).json({
        feeds: [
            {data:feed}
        ]
    })
}