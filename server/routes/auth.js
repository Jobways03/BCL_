const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, teamName, phone } = req.body;

    // 1. Basic input validation
    if (!name || !teamName || !phone) {
      return res
        .status(400)
        .json({ msg: "Name, teamName, and phone number are required." });
    }

    // 2. Check for existing phone
    const exists = await User.findOne({ phone });
    if (exists) {
      return res.status(409).json({ msg: "Phone number already registered." });
    }

    // 3. Create & save user
    const user = new User({ name, teamName, phone });
    await user.save();

    // 4. Issue JWT
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, teamName: user.teamName });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ msg: "Server error—please try again later." });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { phone } = req.body;

    // 1. Basic input validation
    if (!phone) {
      return res.status(400).json({ msg: "Phone number is required." });
    }

    // 2. Lookup user
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(401).json({ msg: "Invalid credentials." });
    }

    // 3. Issue JWT
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, teamName: user.teamName });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Server error—please try again later." });
  }
});

module.exports = router;
