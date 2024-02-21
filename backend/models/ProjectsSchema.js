const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')

const ProjectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    name: { type: String },
    skills: { type: String },
    link: { type: String },
    startdate: { type: Date },
    enddate: { type: Date },
    desc: { type: String },

}, { timestamps: true })

module.exports = mongoose.model("projects", ProjectSchema)