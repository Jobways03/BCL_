const express = require("express");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const TeamLogo = require("../models/TeamLogo");
const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "team_logos",
    public_id: (req, file) =>
      Date.now() + "_" + file.originalname.replace(/\..+$/, ""),
  },
});
const upload = multer({ storage });

// GET all logos for the authenticated user
router.get("/", async (req, res) => {
  try {
    const logos = await TeamLogo.find({ captain: req.user.id });
    return res.json({ logos: logos.map((l) => l.url) });
  } catch (err) {
    console.error("Error fetching logos:", err);
    return res.status(500).json({ msg: "Server error fetching logos" });
  }
});

// POST upload a new logo
router.post("/", upload.single("logo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: "No logo file uploaded" });
    }

    const url = req.file.path;
    const public_id = req.file.filename;
    const logo = new TeamLogo({ captain: req.user.id, url, public_id });
    await logo.save();

    return res.status(201).json({ url });
  } catch (err) {
    console.error("Error uploading logo:", err);
    return res.status(500).json({ msg: "Server error uploading logo" });
  }
});

// DELETE a logo by URL
router.delete("/", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ msg: "Logo URL is required" });
    }

    const logo = await TeamLogo.findOne({ captain: req.user.id, url });
    if (!logo) {
      return res.status(404).json({ msg: "Logo not found" });
    }

    await cloudinary.uploader.destroy(logo.public_id);
    await logo.deleteOne();

    return res.json({ msg: "Logo removed" });
  } catch (err) {
    console.error("Error deleting logo:", err);
    return res.status(500).json({ msg: "Server error deleting logo" });
  }
});

module.exports = router;
