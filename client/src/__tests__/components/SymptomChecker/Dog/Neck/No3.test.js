import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Stiff from "../../../../../Components/SymptomChecker/Dog/Neck/No3Stiff";

describe("No3Stiff component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Stiff />
      </Router>
    );
    expect(screen.getByText("Are there visible lumps or swollen areas?")).toBeInTheDocument();
  });
});