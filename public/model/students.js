const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  prn: {
    type: Number,
    required: true,
    unique: true,
  },
  dob: Date,
  address: String,
  country: String,
  state: String,
  zip: Number,
  osModule: {
    type: Number,
    default: null,
  },
  javaModule: {
    type: Number,
    default: null,
  },
  dsaModule: {
    type: Number,
    default: null,
  },
  dbmsModule: {
    type: Number,
    default: null,
  },
  dotnetModule: {
    type: Number,
    default: null,
  },
  wptModule: {
    type: Number,
    default: null,
  },
  sdmModule: {
    type: Number,
    default: null,
  },
  advjavaModule: {
    type: Number,
    default: null,
  },
  project: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Student", studentSchema);
