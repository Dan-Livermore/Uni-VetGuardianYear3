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
      return res.status(404).send("User not found");
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(401).send("Wrong Password");
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, "movies", {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ token }); // Send the token to the client
  } catch (error) {
    res.status(500).send("An Error Has Occurred");
  }
});

export default router;