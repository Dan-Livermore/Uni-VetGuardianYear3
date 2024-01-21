import { expect } from "chai";
import supertest from "supertest";
import app from "../index.js";

const request = supertest(app);

describe("Log In Routes", () => {  
    // "_id": "65ad2aae91937f2bcd0c6726",
    // "email": "test@admin.com",
    // "password": "$2b$13$1x31E8tdjo1NeVw8BBnSeOO81YzVwALikIhJruODr8PErbZNKKQUy",
    // "firstname": "Test",
    // "lastname": "Admin",
    // "admin": false,
    it("Log In Correctly", () => {
        const loginData = {
            email: "test@admin.com",
            password: "test",
        }    
        return request
          .post("/login")
          .send(loginData)
          .expect(200)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
          });
      });
      it("Log In Fails = No Given Email", () => {
        const loginData = {
            email: null,
            password: "test",
        }    
        return request
          .post("/login")
          .send(loginData)
          .expect(404)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
          });
      });
    //   it("Log In Fails = No Given Password", () => {
    //     const loginData = {
    //         email: "test@admin.com",
    //         password: null,
    //     }    
    //     return request
    //       .post("/login")
    //       .send(loginData)
    //       .expect(401)
    //       .expect("Content-Type", /json/)
    //       .then((res) => {
    //         expect(res.body).to.be.an("object");
    //       });
    //   });
      it("Log In Fails = Email / Account does not exist", () => {
        const loginData = {
            email: "test@DoesNotExist",
            password: "test",
        }    
        return request
          .post("/login")
          .send(loginData)
          .expect(404)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
          });
      });
      it("Log In Fails = Passwords do not match", () => {
        const loginData = {
            email: "test@admin.com",
            password: "New Password",
        }    
        return request
          .post("/login")
          .send(loginData)
          .expect(401)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
          });
      });

    });