import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Sensitive from "../../../../../Components/SymptomChecker/Dog/Feet/Yes3Sensitive";

describe("Yes3Sensitive component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Sensitive />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});