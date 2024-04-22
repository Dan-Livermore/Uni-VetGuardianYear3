import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Sensitive from "../../../../../Components/SymptomChecker/Dog/Feet/No3Sensitive";

describe("No3Sensitive component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Sensitive />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});

