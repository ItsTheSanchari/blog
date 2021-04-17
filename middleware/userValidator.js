const { body,validationResult } = require('express-validator')
exports.userValidationRules = () => {
    return [
        body('email').isEmail()
    ]
}

exports.validate = (req,res,next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()) {
        return next()
    }
    const errorMsgs = []
    errors.array().map(err => errorMsgs.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: errorMsgs,
    })
}