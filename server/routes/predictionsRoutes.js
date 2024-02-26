import express from 'express';
import {Predictions} from '../models/predictionsModel.js';

const router = express.Router();

//CREATE PREDICTION
router.post('/', async (request, response) => {
  try {
    if (!request.body.petID || !request.body.time || !request.body.output) {
      return response.status(400).send({
        message:
          'Send all required fields',
      });
    }    

    const newPrediction = {
      petID: request.body.petID,
      time: request.body.time,
      output: request.body.output,
    };

    const prediction = await Predictions.create(newPrediction);

    return response.status(201).send(prediction);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//GET ALL
router.get('/', async (request, response) => {
  try {
    const predictions = await Predictions.find({});

    return response.status(200).json({
      count: predictions.length,
      data: predictions,
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

    const prediction = await Predictions.findById(id);

    return response.status(200).json(prediction);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//UPDATE PREDICTIONS
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.petID ||
      !request.body.time ||
      !request.body.output
    ) {
      return response.status(400).send({
        message:
          'Send all required fields',
      });
    }

    const { id } = request.params;
    const result = await Predictions.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Prediction not found' });
    }
    return response.status(200).send({ message: 'Prediction updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//DELETE PREDICTIONS
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Predictions.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: 'Prediction not found' });
    }
    return response.status(200).send({ message: 'Prediction deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;