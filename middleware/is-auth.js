const jwt = require('jsonwebtoken')
exports.validateRoute = (req,res,next) => {
    const token = req.get('Authorization')
    if(!token) {
        const error = new Error('User not authenticated')
        error.statusCode = 401
        throw error
    }
    let decodedToken
    try {
        decodedToken = jwt.verify(token,'secret')
    } catch (error) {
        console.log('inside catch',error)
        error.statusCode = 401
        throw error
    }

    if(!decodedToken) {
        const error = new Error('User not authenticated')
        error.statusCode = 401
        throw error
    }
    req.userId = decodedToken.userId
    next()
}
