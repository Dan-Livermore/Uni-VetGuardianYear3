import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Odor from "../../../../../Components/SymptomChecker/Dog/Ear/No3Odor";

describe("No3Odor component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Odor />
      </Router>
    );
    expect(screen.getByText("Is there a change in the pets hearing or balance?")).toBeInTheDocument();
  });
});