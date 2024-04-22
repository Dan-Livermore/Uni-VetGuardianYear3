import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Tight from "../../../../../Components/SymptomChecker/Dog/Belly/Yes2Tight";

describe("Yes2Tight component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Tight />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});