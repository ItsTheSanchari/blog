const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type:String,
        required:true
    },
    fullName : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    rememberToken : {
        type:String
    },
    resetToken:{
        type:String
    },
    resetTokenExpiration: {
        type:Date
    },
},
{
    timestamps: { 
    createdAt: 'created_at' 
}
})
module.exports = mongoose.model('User',UserSchema)