import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Crying from "../../../../../Components/SymptomChecker/Dog/Neck/No2Crying";

describe("No2Crying component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Crying />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});