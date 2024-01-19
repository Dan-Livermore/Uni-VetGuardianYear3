import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import petsRoute from "./routes/petsRoutes.js";
import usersRoute from "./routes/usersRoutes.js";
import signupRoute from "./routes/signupRoutes.js";
import loginRoute from "./routes/loginRoute.js";
import cors from 'cors';

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send("COMP3000 APP");
  });

app.use('/pets', petsRoute);
app.use("/users", usersRoute);
app.use("/signup", signupRoute);
app.use("/login", loginRoute);

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

  export default app;