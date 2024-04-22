import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5Redness from "../../../../../Components/SymptomChecker/Dog/Feet/Yes5Redness";

describe("Yes5Redness component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5Redness />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});