import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes7Odor from "../../../../../Components/SymptomChecker/Dog/Feet/Yes7Odor";

describe("Yes7Odor component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes7Odor />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});