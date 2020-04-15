const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Job = mongoose.model("jobs", JobSchema);
