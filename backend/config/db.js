const mongoose = require('mongoose');


const url="mongodb+srv://keshavsainikesu:Imhater@cluster0.9yvwndu.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async () => {
    try {
      await mongoose.connect(url);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  };
  
  module.exports = connectDB;