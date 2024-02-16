const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')

const ProjectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },
    name: { type: String },
    skills: { type: String },
    link: { type: String },
    startdate: { type: Date },
    enddate: { type: Date },
    desc: { type: String },
    createAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("projects", ProjectSchema)