import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Visible from "../../../../../Components/SymptomChecker/Dog/Feet/Yes2Visible";

describe("Yes2Visible component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Visible />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});