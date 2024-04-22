import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5Persists from "../../../../../Components/SymptomChecker/Dog/Nose/Yes5Persists";

describe("Yes5Persists component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5Persists />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});