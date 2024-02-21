const mongoose = require('mongoose')
const UsersModel = require('./UserSchema')

const SkillSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        required: true
    },
    skill: { type: String },
}, { timestamps: true })

module.exports = mongoose.model("skills", SkillSchema)