import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Thick from "../../../../../Components/SymptomChecker/Dog/Nose/No3Thick";

describe("No3Thick component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Thick />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});