import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Moves from "../../../../../Components/SymptomChecker/Dog/Neck/No1Moves";

describe("No1Moves component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Moves />
      </Router>
    );
    expect(screen.getByText("Is there noticeable stiffness or does the dog avoid looking up or bending down?")).toBeInTheDocument();
  });
});
