import express from "express";
import { User } from "../models/usersModel.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const router = express.Router();

//GET ALL
router.get("/", async (request, response) => {
  try {
    const users = await User.find({});

    return response.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//GET ONE
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const user = await User.findById(id);

    return response.status(200).json(user);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

// UPDATE
router.put('/:id', async (request, response) => {
  try {
    if (!request.body.email || !request.body.password || !request.body.firstname || !request.body.lastname) {
      return response.status(400).send({
        message: 'Enter an email and password',
      });
    }

    const { id } = request.params;
    const { email, password, firstname, lastname } = request.body;

    if (request.body.password.length < 20) {
      // Hash the new password
      request.body.password = await bcrypt.hash(password, 13);
    }

    const updatedUser = await User.findByIdAndUpdate(id, { email, password: request.body.password, firstname, lastname }, { new: true });

    if (!updatedUser) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});


// DELETE
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    // Validate if the ID is a valid ObjectId before attempting to delete
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).json({ message: "Invalid user ID format" });
    }

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error during user deletion:", error);

    // Check for specific error conditions and provide appropriate responses
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return response.status(400).json({ message: "Invalid user ID format" });
    }

    response.status(500).json({ message: "Internal Server Error" });
  }
});


export default router;
