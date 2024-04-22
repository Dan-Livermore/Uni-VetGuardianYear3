import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes7Discolour from "../../../../../Components/SymptomChecker/Dog/Nose/Yes7Discolour";

describe("Yes7Discolour component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes7Discolour />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});