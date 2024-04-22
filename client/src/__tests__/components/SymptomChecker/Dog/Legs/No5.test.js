import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No5 from "../../../../../Components/SymptomChecker/Dog/Legs/No5";

describe("No5 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No5 />
      </Router>
    );
    expect(screen.getByText("Does the dog have difficulty standing up from a lying position or seem unsteady on its feet?")).toBeInTheDocument();
  });
});