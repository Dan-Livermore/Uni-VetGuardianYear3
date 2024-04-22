import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4Frequent from "../../../../../Components/SymptomChecker/Dog/Belly/No4Frequent";

describe("No4Frequent component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4Frequent />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});