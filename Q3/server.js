// Server set up
require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Course = require("./models/courses");
const PORT = process.env.PORT || 3000;

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the Database"));

app.use(express.json());
app.use(express.static("public"));

// Routes
// Get all courses
app.route("/courses").get(async (req, res) => {
  try {
    let courses = await Course.find();
    res.status(200).json(courses);
    console.log("COURSES", courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get courses by ID
app.route("/:id").get(async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Add courses to the database
app.route("/").post(async (req, res) => {
  const course = new Course({
    course1: req.body.course1,
    course2: req.body.course2,
    course3: req.body.course3,
  });

  try {
    const data = await course.save();
    res.status(201).json(data);
    console.log("data", data);
    console.log("****course", course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
