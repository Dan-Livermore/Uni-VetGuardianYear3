import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No6 from "../../../../../Components/SymptomChecker/Dog/Legs/No6";

describe("No6 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No6 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});