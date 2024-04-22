import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No5Yellow from "../../../../../Components/SymptomChecker/Dog/Ear/No5Yellow";

describe("No5Yellow component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No5Yellow />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});