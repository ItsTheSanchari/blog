const User = require('../models/User')
const bcrypt = require('bcrypt')
exports.createUser = async (req,res,next) => {
    const email = req.body.email
    const password = req.body.pass
    const fullName = req.body.fullName
    const saltRound = 10
    try {
        console.log('createUser')
        const UserFound = await User.find({
            email:email
        })
        console.log('UserFound',UserFound)
        if(!UserFound.length) {
            //generate hash and create User
            const hashedPass = await this.generateHash(password,saltRound)
            if(hashedPass) {
                
            }
        }
    } catch(err) {

    }

    // const user = new User({
    //     email:email,
    //     password:password,
    //     fullName:fullName
    // })
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
    console.log('hashedPass',hashedPass)
    return hashedPass
}