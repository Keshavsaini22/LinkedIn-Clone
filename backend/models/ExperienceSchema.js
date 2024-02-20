const mongoose = require('mongoose')
const UsersModel = require('../models/UserSchema')

const ExperienceSchema = new mongoose.Schema({
     userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: UsersModel,
          require: true
     },
     title: { type: String },
     comapny: { type: String },
     location: { type: String },
     locationtype: { type: String },
     startdate: { type: Date },
     enddate: { type: Date },
     status: { type: Boolean },
     desc: { type: String },

}, { timestamps: true })

module.exports = mongoose.model("experiences", ExperienceSchema)