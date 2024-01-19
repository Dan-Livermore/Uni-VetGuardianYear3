import express from "express";
import { User } from "../models/usersModel.js";
import bcrypt from "bcrypt";

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
    if (!request.body.email || !request.body.password) {
      return response.status(400).send({
        message: 'Enter an email and password',
      });
    }

    const { id } = request.params;
    const { email, password } = request.body;

    if (request.body.password.length < 20) {
      // Hash the new password
      request.body.password = await bcrypt.hash(password, 13);
    }

    const updatedUser = await User.findByIdAndUpdate(id, { email, password: request.body.password }, { new: true });

    if (!updatedUser) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.status(200).send({ message: 'User updated successfully' });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});


//DELETE
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }
    return response.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

export default router;
