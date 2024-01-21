import { expect } from "chai";
import supertest from "supertest";
import app from "../index.js";

const request = supertest(app);

describe("Sign Up Routes", () => {  
    it("Sign Up Correctly", () => {
        const signupData = {
            email: "unittest@signup.com1",
            password: "password",
            firstname: "unit",
            lastname: "test",
        }    
        return request
          .post("/signup")
          .send(signupData)
          .expect(200)
          .then((res) => {
            expect(res.body).to.be.an("object");
            return request.delete(`../users/${res.body._id}`);
          });
      });
      it("Sign Up Fails = No Given Email", () => {
        const signupData = {
            email: "unittest@signup.com1",
            password: null,
            firstname: "unit",
            lastname: "test",
        }    
        return request
          .post("/signup")
          .send(signupData)
          .expect(400)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
            return request.delete(`/users/${res.body._id}`);
          });
      });
      // it("Sign Up Fails = No Given Password", () => {
      //   const signupData = {
      //       email: "unittest@signup.com1",
      //       password: null,
      //       firstname: "unit",
      //       lastname: "test",
      //   }    
      //   return request
      //     .post("/signup")
      //     .send(signupData)
      //     .expect(400)
      //     .expect("Content-Type", /json/)
      //     .then((res) => {
      //       expect(res.body).to.be.an("object");
      //       return request.delete(`../users/${res.body._id}`);
      //     });
      // });
      it("Sign Up Fails = No Given Firstname", () => {
        const signupData = {
            email: "unittest@signup.com1",
            password: "password",
            firstname: null,
            lastname: "test",
        }    
        return request
          .post("/signup")
          .send(signupData)
          .expect(400)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
            return request.delete(`/users/${res.body._id}`);
          });
      });
      it("Sign Up Fails = No Given Lastname", () => {
        const signupData = {
            email: "unittest@signup.com1",
            password: "password",
            firstname: "unit",
            lastname: null,
        }    
        return request
          .post("/signup")
          .send(signupData)
          .expect(400)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
            return request.delete(`/users/${res.body._id}`);
          });
      });
      it("Sign Up Fails = Email / Account already exists", () => {
        const signupData = {
            email: "unit@test.com",
            password: "password",
            firstname: "unit",
            lastname: "test",
        }    
        return request
          .post("/signup")
          .send(signupData)
          .expect(500)
          .expect("Content-Type", /json/)
          .then((res) => {
            expect(res.body).to.be.an("object");
          });
      });
    });