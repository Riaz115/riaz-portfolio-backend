require("dotenv").config();
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const DBConn = async () => {
  try {
    await mongoose.connect(URI);
    console.log("data connected Successfully");
  } catch (err) {
    console.log("there is error in the mongoose connection function", err);
  }
};

//exporting
module.exports = DBConn;
