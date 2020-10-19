const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the workout"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter the type of exercise: Cardio or Resistance"
  },
  weight: {
    type: Number,
    required: "Enter the weight in lbs"
  },
  sets: {
    type: Number,
    required: "Enter the amount of sets"
  },
  reps: {
    type: Number,
    required: "Enter the amount of reps"
  },
  duration: {
    type: Number,
    required: "Enter the exercise duration in minutes"
  },
  distance: {
    type: Number,
    required: "Enter the distance traveled in miles"
  }
});

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;