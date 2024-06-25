const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
const { resizeImage, upload } = require("../middlewares/uploadImages");
const confirmplayer = require("../models/confirmedPlayer");

router.post("/createPlayer", upload.array("profile"), async (req, res) => {
  try {
    const result = await resizeImage(req.files[0].path);
    const player = await Player.create({ ...req.body, profile: result.url });
    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getPlayer/:team", async (req, res) => {
  try {
    const { team } = req.params;
    const Players = await Player.find({ team: team });
    res.json(Players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/confirmPlayer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndUpdate(
      { _id: id },
      { $set: { filled: true } }
    );
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteplayer/:id", async (req, res) => {
  try {
    //console.log(req.params.id);
    await Player.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Player" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update player

router.put("/updatePlayer", upload.array("profile", 1), async (req, res) => {
  try {
    // Assuming resizeImage is a function that resizes the image and returns an object with a 'url' property
   

    let updateplayer = await Player.findById({ _id: req.body._id });

    if (!updateplayer) {
      return res
        .status(404)
        .send({ success: false, message: "Profile not found" });
    }

    updateplayer.name = req.body.name || updateplayer.name;
    updateplayer.number = req.body.number || updateplayer.number;

     if (req.files && req.files[0]) {
       let result = await resizeImage(req.files[0].path);
       updateplayer.profile = result.url
     }

     const updated = await updateplayer.save()
    
    //console.log(updateprofile);
    res.status(201).json(updated);
  } catch (error) {
    //console.error(error); // It's a good practice to log the error for debugging.
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
