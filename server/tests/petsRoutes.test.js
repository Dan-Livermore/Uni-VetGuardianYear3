import { expect } from "chai";
import supertest from "supertest";
import app from "../index.js";

const request = supertest(app);

describe("Pets Routes", () => {  
  it("CREATE is a valid request", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: 29.5,
        dob: "2024-01-01T00:00:00.000Z",
    };

    return request
      .post("/pets")
      .send(newPetData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
        expect(res.body.name).to.equal(newPetData.name);
        expect(res.body.animal).to.equal(newPetData.animal);
        expect(res.body.gender).to.equal(newPetData.gender);
        expect(res.body.weight).to.equal(newPetData.weight);
        expect(res.body.dob).to.equal(newPetData.dob);
        return request.delete(`/pets/${res.body._id}`).expect(200);
      });
  });

  it("READ is valid request", () => {
    return request
      .get("/pets")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE is a valid request", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: 29.5,
        dob: "2024-01-01T00:00:00.000Z",
    };
    const updatedPetData = {
        name: "Updated Pet",
        animal: "Cat",
        gender: "Female",
        weight: 20,
        dob: "2023-01-01T00:00:00.000Z",
    };
    return request
      .post("/pets")
      .send(newPetData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        return request
          .put(`/pets/${res.body._id}`)
          .send(updatedPetData)
          .expect(200)
          .expect("Content-Type", /json/)
          .then((updatedRes) => {
            expect(updatedRes.body).to.be.an("object");
            return request.delete(`/pets/${res.body._id}`).expect(200);
          });
      });
  });

  
  it("DELETE is a valid request", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: 29.5,
        dob: "2024-01-01T00:00:00.000Z",
    };

    return request
      .post("/pets")
      .send(newPetData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((createRes) => {
        return request.delete(`/pets/${createRes.body._id}`).expect(200);
      });
  });

  it("GET ALL Pets", () => {
    return request
      .get("/pets")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
  it("GET ONE by known ID", () => {
    return request
      .get("/pets/65abea5551dbf8fed92dc601")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");

        // Check dob to see if it is a real date
        expect(res.body.dob).to.be.a("string");
        expect(() => new Date(res.body.dob)).to.not.throw();

        // Check weight is an int
        expect(res.body.weight).to.be.a("number");
        expect(res.body.weight % 1).to.equal(0);

        // Check other fields are string
        expect(res.body.name).to.be.a("string");
        expect(res.body.animal).to.be.a("string");
        expect(res.body.gender).to.be.a("string");
      });
  });
  it("GET ONE - ID Too Short", () => {
    return request
      .get("/pets/1")
      .expect(500)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
  it("GET ONE - No ID = Return All", () => {
    return request
      .get("/pets/")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
  it("GET ONE - No ID in DB", () => {
    return request
      .get("/pets/111111111111111111111111")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("null");
      });
  });

  it("CREATE Pet", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: 29.5,
        dob: "2024-01-01T00:00:00.000Z",
    };

    return request
      .post("/pets")
      .send(newPetData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
        expect(res.body.name).to.equal(newPetData.name);
        expect(res.body.animal).to.equal(newPetData.animal);
        expect(res.body.gender).to.equal(newPetData.gender);
        expect(res.body.weight).to.equal(newPetData.weight);
        expect(res.body.dob).to.equal(newPetData.dob);
        return request.delete(`/pets/${res.body._id}`).expect(200);
      });
  });
  it("CREATE Pet - dob not a date", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: 29.5,
        dob: "New Date",
    };
    return request
      .post("/pets")
      .send(newPetData)
      .expect(500)
      .expect("Content-Type", /json/);
  });

  it("CREATE Pet - weight is a string", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: "29.5",
        dob: "2024-01-01T00:00:00.000Z",
    };
    return request
      .post("/pets")
      .send(newPetData)
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE an existing pet", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: 29.5,
        dob: "2024-01-01T00:00:00.000Z",
    };

    return request
      .post("/pets")
      .send(newPetData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((createRes) => {
        return request.delete(`/pets/${createRes.body._id}`).expect(200);
      });
  });

 

  it("UPDATE a Pet", () => {
    const newPetData = {
        name: "Unit Pet",
        animal: "Dog",
        gender: "Male",
        weight: 29.5,
        dob: "2024-01-01T00:00:00.000Z",
    };
    const updatedPetData = {
        name: "Updated Pet",
        animal: "Cat",
        gender: "Female",
        weight: 10,
        dob: "2020-09-09T00:00:00.000Z",
    };
    return request
      .post("/pets")
      .send(newPetData)
      .expect(201)
      .expect("Content-Type", /json/)
      .then((res) => {
        return request
          .put(`/pets/${res.body._id}`)
          .send(updatedPetData)
          .expect(200)
          .expect("Content-Type", /json/)
          .then((updatedRes) => {
            expect(updatedRes.body).to.be.an("object");
            return request.delete(`/pets/${res.body._id}`).expect(200);
          });
      });
  });


  
  it("UPDATE - No ID", () => {
    return request
      .put("/pets/")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - ID Too Short", () => {
    return request
      .put("/pets/1")
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No Name", () => {
    return request
      .put("/pets/111111111111111111111111")
      .send({
            animal: "Mouse",
            gender: "Female",
            weight: 100,
            dob: "1998-09-09T00:00:00.000Z",
        })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No Animal", () => {
    return request
      .put("/pets/111111111111111111111111")
      .send({
        name: "Unit Pet",
        gender: "Female",
        weight: 100,
        dob: "1998-09-09T00:00:00.000Z",
    })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No Gender", () => {
    return request
      .put("/pets/111111111111111111111111")
      .send({
        name: "Unit Pet",
        animal: "Mouse",
        weight: 100,
        dob: "1998-09-09T00:00:00.000Z",
    })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No Weight", () => {
    return request
      .put("/pets/111111111111111111111111")
      .send({
        name: "Unit Pet",
        animal: "Mouse",
        gender: "Female",
        dob: "1998-09-09T00:00:00.000Z",
    })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No DOB", () => {
    return request
      .put("/pets/111111111111111111111111")
      .send({
        name: "Unit Pet",
        animal: "Mouse",
        gender: "Female",
        weight: 100,
    })
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - No ID", () => {
    return request
      .delete("/pets/")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - ID Too Short", () => {
    return request
      .delete("/pets/1")
      .expect(500)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - No ID in DB", () => {
    return request
      .delete("/pets/111111111111111111111111")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
});
