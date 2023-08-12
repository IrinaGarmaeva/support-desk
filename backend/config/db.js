const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const conn = await mongoose.connect('mongodb+srv://irina:irina2023@cluster0.xxz8a2w.mongodb.net/?retryWrites=true&w=majority')
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports= connectDB


