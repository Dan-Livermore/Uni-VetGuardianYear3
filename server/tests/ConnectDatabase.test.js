import { expect } from "chai";
import supertest from "supertest";
import app from "../index.js";
import mongoose from "mongoose";
import { mongoDBURL } from "../config.js";

const request = supertest(app);

describe("DB Connection", () => {

  it("Connect to MongoDB Atlas", function () {
    // This test is now asynchronous and returns a promise
    return mongoose
      .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        // Your test logic
        // You can also add assertions related to the MongoDB connection here if needed
      });
  });
});
