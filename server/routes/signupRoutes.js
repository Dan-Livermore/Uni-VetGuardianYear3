import express from "express";
import { User } from "../models/usersModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Enter both an email and a password",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 13);

    const newAccount = {
      email: req.body.email,
      password: hash,
      admin: req.body.admin || false,
    };

    const account = await User.create(newAccount);
    return res.send('Account Created!');
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).send({
        message: "Validation failed",
        errors: error.errors,
      });
    }
    console.error(error); // Log the error for debugging
    res.status(500).send({ message: "Internal Server Error" });
  }
});


export default router;