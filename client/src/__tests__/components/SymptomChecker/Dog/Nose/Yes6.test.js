import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes6Appearance from "../../../../../Components/SymptomChecker/Dog/Nose/Yes6Appearance";

describe("Yes6Appearance component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes6Appearance />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});