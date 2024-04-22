import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No7Discolour from "../../../../../Components/SymptomChecker/Dog/Nose/No7Discolour";

describe("No7Discolour component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No7Discolour />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});