const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise: Cardio or Resistance"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the workout"
      },
      duration: {
        type: Number,
        required: "Enter the exercise duration in minutes"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;