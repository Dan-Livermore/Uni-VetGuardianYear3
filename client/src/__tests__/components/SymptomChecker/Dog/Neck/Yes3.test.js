import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Stiff from "../../../../../Components/SymptomChecker/Dog/Neck/Yes3Stiff";

describe("Yes3Stiff component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Stiff />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});