const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ObjectId format" });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });
    if (!user) {
      return res.status(404).json({ error: "User not found or age <= 21" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get all users with age > 21
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
