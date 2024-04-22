import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No7Odor from "../../../../../Components/SymptomChecker/Dog/Feet/No7Odor";

describe("No7Odor component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No7Odor />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
