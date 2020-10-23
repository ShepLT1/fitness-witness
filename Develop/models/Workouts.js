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
},
  {
    toJSON: {
      virtuals: true
    }
  });

workoutSchema.virtual('totalDuration').get(function () {
  let duration = 0;
  this.exercises.forEach((item) => duration = duration + item.duration);
  return duration;
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;