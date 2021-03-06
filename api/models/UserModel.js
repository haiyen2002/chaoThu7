const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture : {
        type: String,
        default: "noavt.jpg"
    },
    role: {
        type: String,
        default: 'user'
    },
    desc: {
        type: String,
        max: 50
    },
},{timestamps: true})

module.exports = mongoose.model("User", UserSchema)