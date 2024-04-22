import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3 from "../../../../../Components/SymptomChecker/Dog/Legs/No3";

describe("No3 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3 />
      </Router>
    );
    expect(screen.getByText("Is your pet generally weak?")).toBeInTheDocument();
  });
});