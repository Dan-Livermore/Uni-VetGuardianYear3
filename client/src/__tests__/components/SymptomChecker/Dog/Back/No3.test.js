import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Move from "../../../../../Components/SymptomChecker/Dog/Back/No3Move";

describe("No3Move component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Move />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
