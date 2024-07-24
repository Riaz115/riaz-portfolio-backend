const mongoose = require("mongoose");

const forServicesSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  subtitle: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  amountFrom: {
    required: true,
    type: String,
  },
  amountTo: {
    required: true,
    type: String,
  },
});

//creating
const ServciesModel = mongoose.model("Service", forServicesSchema);

//exporting
module.exports = ServciesModel;
