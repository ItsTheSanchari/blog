const User = require('../models/User')
const bcrypt = require('bcrypt')
exports.createUser = async (req,res,next) => {
    const email = req.body.email
    const password = req.body.pass
    const fullName = req.body.fullName
    const saltRound = 10
    try {
        const UserFound = await User.find({
            email:email
        })
        if(!UserFound.length) {
            //generate hash and create User
            const hashedPass = await this.generateHash(password,saltRound)
            if(hashedPass) {
                const user = new User({
                email:email,
                password:hashedPass,
                fullName:fullName
            })
            await user.save()
            res.status(200).json({
                msg : 'Yay! user created'
            })
            }
        }
    } catch(err) {

    }

    
}
 exports.generateHash = async (password,saltRound)=> {
    let hashedPass = null
    hashedPass = await new Promise((resolve,reject)=> {
        bcrypt.hash(password,saltRound,(err,hash)=> {
            if(err) {
                reject(err)
            }
            resolve(hash)
        })
    })
    return hashedPass
}