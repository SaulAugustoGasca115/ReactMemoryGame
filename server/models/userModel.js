const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim:true
    },
    role:{
        type: String,
        default: 'player'
    },
    victories:{
        type:Number,
        default: 0
    },
    unvictories:{
        type:Number,
        default: 0
    }


},{timestamps: true})

module.exports = mongoose.model("User",UserSchema);