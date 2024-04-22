import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No8 from "../../../../../Components/SymptomChecker/Dog/Legs/No8";

describe("No8 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No8 />
      </Router>
    );
    expect(screen.getByText("Has the dog shown any change in behavior or appetite?")).toBeInTheDocument();
  });
});