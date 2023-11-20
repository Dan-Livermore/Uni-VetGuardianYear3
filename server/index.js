import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import petsRoute from "./routes/petsRoutes.js";
import cors from 'cors';

const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  })
);

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send("COMP3000 APP");
  });

app.use('/pets', petsRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });