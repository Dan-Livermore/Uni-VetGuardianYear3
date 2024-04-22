import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Clear from "../../../../../Components/SymptomChecker/Dog/Nose/Yes2Clear";

describe("Yes2Clear component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Clear />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});