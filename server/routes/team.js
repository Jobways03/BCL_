const express = require("express");
const multer = require("multer");
const Team = require("../models/TeamMember");

const router = express.Router();
// multer middleware that only parses text fields, no files
const uploadNone = multer().none();

// GET all players for this captain
router.get("/", async (req, res) => {
  try {
    const players = await Team.find({ captain: req.user.id });
    return res.json(players);
  } catch (err) {
    console.error("Error fetching players:", err);
    return res.status(500).json({ msg: "Server error fetching players" });
  }
});

// POST create new player
// use uploadNone() so req.body.data is populated
router.post("/", uploadNone, async (req, res) => {
  try {
    if (!req.body.data) {
      return res.status(400).json({ msg: "Player data is required" });
    }

    let data;
    try {
      data = JSON.parse(req.body.data);
    } catch (parseErr) {
      console.error("Invalid JSON in player data:", parseErr);
      return res
        .status(400)
        .json({ msg: "Invalid JSON format for player data" });
    }

    const player = new Team({ ...data, captain: req.user.id });
    await player.save();
    return res.status(201).json(player);
  } catch (err) {
    console.error("Error creating player:", err);
    return res.status(500).json({ msg: "Server error creating player" });
  }
});

// PUT update existing player
router.put("/:id", uploadNone, async (req, res) => {
  try {
    if (!req.body.data) {
      return res
        .status(400)
        .json({ msg: "Player data is required for update" });
    }

    let updates;
    try {
      updates = JSON.parse(req.body.data);
    } catch (parseErr) {
      console.error("Invalid JSON in update data:", parseErr);
      return res
        .status(400)
        .json({ msg: "Invalid JSON format for update data" });
    }

    const player = await Team.findOneAndUpdate(
      { _id: req.params.id, captain: req.user.id },
      updates,
      { new: true }
    );

    if (!player) {
      return res
        .status(404)
        .json({ msg: "Player not found or not authorized" });
    }

    return res.json(player);
  } catch (err) {
    console.error("Error updating player:", err);
    return res.status(500).json({ msg: "Server error updating player" });
  }
});

// DELETE a player
router.delete("/:id", async (req, res) => {
  try {
    const player = await Team.findOneAndDelete({
      _id: req.params.id,
      captain: req.user.id,
    });
    if (!player) {
      return res
        .status(404)
        .json({ msg: "Player not found or not authorized" });
    }
    return res.json({ msg: "Player deleted" });
  } catch (err) {
    console.error("Error deleting player:", err);
    return res.status(500).json({ msg: "Server error deleting player" });
  }
});

module.exports = router;
