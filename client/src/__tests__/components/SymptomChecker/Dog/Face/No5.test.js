import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No5Dental from "../../../../../Components/SymptomChecker/Dog/Face/No5Dental";

describe("No5Dental component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No5Dental />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});