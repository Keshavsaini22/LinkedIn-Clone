const mongoose = require('mongoose')
const UsersModel= require('./UserSchema')

const SkillSchema=new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId,
   ref:UsersModel,
   require: true
   },
    skill:{type:String},
    
})

module.exports = mongoose.model("skills", SkillSchema)