const { body, validationResult } = require('express-validator');
exports.feedValidationRules = () => {
    return [
        body('title').isLength({
            min:5
        }).withMessage('Need to have 5 charecter'),
      ]
}
exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    console.log('errors',errors)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
    
  }