import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No6Tilt from "../../../../../Components/SymptomChecker/Dog/Ear/No6Tilt";

describe("No6Tilt component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No6Tilt />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});