const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: {
        type: String,
        unique: true,
        require: [true, "Name is required"]
    },
    password: {
        type: String,
        require: [true, "Name is required"]
    },
    address: {
        type: Object,
        properties: {
            street: { type: String },
            city: { type: String },
            pincode: { type: Number },
            country: { type: String }
        }
    },
    phone: { type: String },
    website: { type: String },
    image: { type: String },
    languages: { type: String },
    title: { type: String },
    desc: { type: String },
    createAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model("users", UserSchema)