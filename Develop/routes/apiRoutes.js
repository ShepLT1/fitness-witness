const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workouts.find({}) // find most recent workout
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.Workouts.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  db.Exercises.create(body)
    .then(({ _id }) => db.Workouts.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;