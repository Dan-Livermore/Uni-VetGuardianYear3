import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Vomit from "../../../../../Components/SymptomChecker/Dog/Belly/No3Vomit";

describe("No3Vomit component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Vomit />
      </Router>
    );
    expect(screen.getByText("Has your dog changed its eating habits?")).toBeInTheDocument();
  });
});