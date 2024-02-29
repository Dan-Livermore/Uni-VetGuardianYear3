import { expect } from "chai";
import supertest from "supertest";
import app from "../index.js";

const request = supertest(app);

describe("Predictions Routes", () => {  
  it("CREATE is a valid request", () => {
    const newPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Head Pain"
    };

    return request
      .post("/predictions")
      .send(newPredictionData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
        expect(res.body.petID).to.equal(newPredictionData.petID);
        expect(res.body.time).to.equal(newPredictionData.time);
        expect(res.body.output).to.equal(newPredictionData.output);
        return request.delete(`/predictions/${res.body._id}`).expect(200);
      });
  });

  it("READ is valid request", () => {
    return request
      .get("/predictions")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE is a valid request", () => {
    const newPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Head Pain"
    };
    const updatedPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Fur Falling Off"
    };
    return request
      .post("/predictions")
      .send(newPredictionData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        return request
          .put(`/predictions/${res.body._id}`)
          .send(updatedPredictionData)
          .expect(200)
          .expect("Content-Type", /json/)
          .then((updatedRes) => {
            expect(updatedRes.body).to.be.an("object");
            return request.delete(`/predictions/${res.body._id}`).expect(200);
          });
      });
  });

  
  it("DELETE is a valid request", () => {
    const newPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Head Pain"
    };

    return request
      .post("/predictions")
      .send(newPredictionData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((createRes) => {
        return request.delete(`/predictions/${createRes.body._id}`).expect(200);
      });
  });

  it("GET ALL Predictions", () => {
    return request
      .get("/predictions")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("GET ONE by known ID", () => {
    return request
      .get("/predictions/65dcbc42f9a0f3f2392b456b")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");

        // Check time to see if it is a real date
        expect(res.body.time).to.be.a("string");
        expect(() => new Date(res.body.time)).to.not.throw();

        // Check other fields are string
        expect(res.body.petID).to.be.a("string");
        expect(res.body.output).to.be.a("string");
      });
  });

  it("GET ONE - ID Too Short", () => {
    return request
      .get("/predictions/1")
      .expect(500)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
  it("GET ONE - No ID = Return All", () => {
    return request
      .get("/predictions/")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
  it("GET ONE - No ID in DB", () => {
    return request
      .get("/predictions/111111111111111111111111")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("null");
      });
  });

  it("CREATE Prediction", () => {
    const newPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Head Pain"
    };

    return request
      .post("/predictions")
      .send(newPredictionData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
        expect(res.body.petID).to.equal(newPredictionData.petID);
        expect(res.body.time).to.equal(newPredictionData.time);
        expect(res.body.output).to.equal(newPredictionData.output);

        return request.delete(`/predictions/${res.body._id}`).expect(200);
      });
  });
  it("CREATE Prediction - time not a date", () => {
    const newPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "Date",
        output: "Head Pain"
    };
    return request
      .post("/predictions")
      .send(newPredictionData)
      .expect(500)
      .expect("Content-Type", /json/);
  });

  it("CREATE Prediction", () => {
    return request
      .post("/predictions")
      .send()
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE an existing Prediction", () => {
    const newPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Head Pain"
    };

    return request
      .post("/predictions")
      .send(newPredictionData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((createRes) => {
        return request.delete(`/predictions/${createRes.body._id}`).expect(200);
      });
  });

 

  it("UPDATE a Prediction", () => {
    const newPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Head Pain"
    };
    const updatedPredictionData = {
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z",
        output: "Fur Falling Off"
    };
    return request
      .post("/predictions")
      .send(newPredictionData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        return request
          .put(`/predictions/${res.body._id}`)
          .send(updatedPredictionData)
          .expect(200)
          .expect("Content-Type", /json/)
          .then((updatedRes) => {
            expect(updatedRes.body).to.be.an("object");
            return request.delete(`/predictions/${res.body._id}`).expect(200);
          });
      });
  });


  
  it("UPDATE - No ID", () => {
    return request
      .put("/predictions/")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - ID Too Short", () => {
    return request
      .put("/predictions/1")
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No petID", () => {
    return request
      .put("/predictions/111111111111111111111111")
      .send({
            time: "2024-01-31T00:00:00.000Z",
            output: "Head Pain"
        })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No time", () => {
    return request
      .put("/predictions/111111111111111111111111")
      .send({

        petID: "65ca369e4ac399bd523db06e",
        output: "Head Pain"
    })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No output", () => {
    return request
      .put("/predictions/111111111111111111111111")
      .send({
        petID: "65ca369e4ac399bd523db06e",
        time: "2024-01-31T00:00:00.000Z"
    })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - No ID", () => {
    return request
      .delete("/predictions/")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - ID Too Short", () => {
    return request
      .delete("/predictions/1")
      .expect(500)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - No ID in DB", () => {
    return request
      .delete("/predictions/111111111111111111111111")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
});