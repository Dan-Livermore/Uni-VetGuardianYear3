import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5Yellow from "../../../../../Components/SymptomChecker/Dog/Ear/Yes5Yellow";

describe("Yes5Yellow component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5Yellow />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});