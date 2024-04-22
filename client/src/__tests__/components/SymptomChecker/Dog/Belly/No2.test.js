import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Tight from "../../../../../Components/SymptomChecker/Dog/Belly/No2Tight";

describe("No2Tight component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Tight />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
