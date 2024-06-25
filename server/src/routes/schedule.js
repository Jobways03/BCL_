const router = require("express").Router();
const Schedule = require("../models/schedule");

// GET all schedules
router.get("/getAll", async (req, res) => {
  try {
    const schedules = await Schedule.find()
      .populate("team1")
      .populate("team2")
      // .sort({ date: 1, time: 1 });
    res.json(schedules);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching schedules", error: error.message });
  }
});

// POST create a new schedule
router.post("/create", async (req, res) => {
  try {
    const newSchedule = new Schedule(req.body);
    const savedSchedule = await newSchedule.save();
    res.json(savedSchedule);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating schedule", error: error.message });
  }
});

// DELETE a schedule by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    await Schedule.findByIdAndDelete(req.params.id);
    res.json({ message: "Successfully deleted the schedule." });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error deleting schedule", error: error.message });
  }
});

router.put("/update" , async (req , res) => {
  try{
      const updated = await Schedule.findByIdAndUpdate(
        { _id: req.body.resultid },
        {
          $set: {
            result: req.body.result,
            team1score: req.body.score1,
            team2score: req.body.score2,
          },
        }
      );
res.status(201).json(updated);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error updating schedule", error: error.message });
  }
}) 

module.exports = router;
