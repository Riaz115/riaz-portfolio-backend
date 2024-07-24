const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const forRegisterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    reqiured: true,
    unique: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("this is not valid email");
      }
    },
  },

  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    required: true,
    type: Boolean,
    default: false,
  },
});

//this is for the bcrypt passowrd
forRegisterSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  const hashPassowrd = await bcrypt.hash(this.password, salt);
  return (this.password = hashPassowrd);
});

//this is for the compare password
forRegisterSchema.methods.ComparePassword = async function (password) {
  const checkPassword = await bcrypt.compare(password, this.password);
  console.log(checkPassword);
  return checkPassword;
};

//this is for the generate token
forRegisterSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      email: this.email,
      userId: this._id.toString(),
      isAdmin: this.isAdmin,
    },
    process.env.SECRETEKEY
  );
};

//creating model
const forRegister = mongoose.model("user", forRegisterSchema);

//exporting
module.exports = forRegister;
