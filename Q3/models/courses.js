const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  course1: {
    type: String,
    lowercase: true,
    trim: true,
  },
  course2: {
    type: String,
    lowercase: true,
    trim: true,
  },
  course3: {
    type: String,
    lowercase: true,
    trim: true,
  },
});

module.exports = mongoose.model("Course", coursesSchema);
