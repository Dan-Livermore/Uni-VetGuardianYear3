import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No7Paralysis from "../../../../../Components/SymptomChecker/Dog/Back/No7Paralysis";

describe("No7Paralysis component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No7Paralysis />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
