import { expect } from "chai";
import supertest from "supertest";
import app from "../index.js";

const request = supertest(app);
// "_id": "65aaa64c4a9f399263617b01"
// "email":"unit@test.com"
// "password":"unittest"

describe("Users Routes", () => {
  it("READ is a valid request", () => {
    return request
      .get("/users")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE is a valid request", () => {
    return request
      .put("/users/65aaa64c4a9f399263617b01")
      .send({
        email: "startup@unittest.com",
        password: "password",
        admin: true,
      })
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("GET ALL Films", () => {
    return request
      .get("/users")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("GET ONE - ID Too Short", () => {
    return request
      .get("/users/1")
      .expect(500)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
  it("GET ONE - No ID = Return All", () => {
    return request
      .get("/users/")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
  it("GET ONE - No ID in DB", () => {
    return request
      .get("/users/111111111111111111111111")
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an("null");
      });
  });

  it("UPDATE - No ID", () => {
    return request
      .put("/users/")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - ID Too Short", () => {
    return request
      .put("/users/1")
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No Email", () => {
    return request
      .put("/users/111111111111111111111111")
      .send({
        password: "password",
      })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("UPDATE - No Password", () => {
    return request
      .put("/users/111111111111111111111111")
      .send({
        email: "email",
      })
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - No ID", () => {
    return request
      .delete("/users/")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - ID Too Short", () => {
    return request
      .delete("/users/1")
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });

  it("DELETE - No ID in DB", () => {
    return request
      .delete("/users/111111111111111111111111")
      .expect(404)
      .then((res) => {
        expect(res.body).to.be.an("object");
      });
  });
});
