import express from 'express';
import {Pet} from '../models/petModel.js';

const router = express.Router();

//CREATE PET
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.animal ||
      !request.body.gender ||
      !request.body.weight ||
      !request.body.dob 
    ) {
      return response.status(400).send({
        message:
          'Send all required fields',
      });
    }
    const newPet = {
      name: request.body.name,
      animal: request.body.animal,
      gender: request.body.gender,
      weight: request.body.weight,
      dob: request.body.dob,
    };

    const pet = await Pet.create(newPet);
    console.log(pet);

    return response.status(201).send(pet);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//GET ALL
router.get('/', async (request, response) => {
  try {
    const pets = await Pet.find({});

    return response.status(200).json({
      count: pets.length,
      data: pets,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//GET ONE
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const pet = await Pet.findById(id);

    return response.status(200).json(pet);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//UPDATE PET
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.animal ||
      !request.body.gender ||
      !request.body.weight
    ) {
      return response.status(400).send({
        message:
          'Send all required fields',
      });
    }

    const { id } = request.params;
    const result = await Pet.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Pet not found' });
    }
    return response.status(200).send({ message: 'Pet updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//DELETE PET
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Pet.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: 'Pet not found' });
    }
    return response.status(200).send({ message: 'Pet deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;