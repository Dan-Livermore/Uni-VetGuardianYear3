import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No10 from "../../../../../Components/SymptomChecker/Dog/Legs/No10";

describe("No10 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No10 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});