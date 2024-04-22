import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Eating from "../../../../../Components/SymptomChecker/Dog/Mouth/No3Eating";

describe("No3Eating component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Eating />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});