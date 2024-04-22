import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Thick from "../../../../../Components/SymptomChecker/Dog/Nose/Yes3Thick";

describe("Yes3Thick component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Thick />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});