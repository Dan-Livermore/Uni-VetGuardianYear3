import express from "express";
import { User } from "../models/usersModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.firstname || !req.body.lastname) {
      return res.status(400).send({
        message: "Enter an email, a password and both names",
      });
    }
    const hash = await bcrypt.hash(req.body.password, 13);

    const newAccount = {
      email: req.body.email,
      password: hash,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
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
    console.error(error); 
    res.status(500).send({ message: "Internal Server Error" });
  }
});


export default router;