const mongoose = require("mongoose");
const validator = require("validator");

const forContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    validate(val) {
      if (!validator.isEmail) {
        throw new Error("invalid email ");
      }
    },
  },
  msg: {
    type: String,
    required: true,
  },
});

//modeling
const contactSchema = mongoose.model("Contact", forContactSchema);

//exporting
module.exports = contactSchema;
