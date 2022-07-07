const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://Niku8800:1234@cluster0.aaden.mongodb.net/cart`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected... ready to go!`.blue.bold);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    process.exit(); // process.exit() is used to terminate the process
  }
};

module.exports = connectDB;
