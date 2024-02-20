const mongoose = require('mongoose')
const UsersModel = require('../models/UserSchema')

const EducationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: UsersModel,
        require: true
    },
    name: { type: String },
    degree: { type: String },
    fieldofstudy: { type: String },
    startdate: { type: Date },
    enddate: { type: Date },
    grade: { type: String },
    desc: { type: String },
}, { timestamps: true })

module.exports = mongoose.model("educations", EducationSchema)