import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No7 from "../../../../../Components/SymptomChecker/Dog/Legs/No7";

describe("No7 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No7 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});