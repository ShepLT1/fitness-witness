const router = require("express").Router();
const Workouts = require("../models/Workouts");

router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .then(dbWorkout => {
      console.log(dbWorkout[0].totalDuration);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(body, params.id);
  Workouts.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
    .then(dbWorkouts => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;