import express from "express";
import { User } from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(401).json({ error: "Incorrect Password" });
    }

    const token = jwt.sign({ userId: user._id }, "animabobs", {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "An Error Has Occurred" });
  }
});

export default router;
