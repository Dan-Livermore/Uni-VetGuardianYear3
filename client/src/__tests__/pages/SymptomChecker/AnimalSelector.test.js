import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimalSelector from "../../../Pages/SymptomChecker/AnimalSelector";

describe("AnimalSelector component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <AnimalSelector />
      </Router>
    );
    expect(screen.getByText("Now, where does the problem occur from?")).toBeInTheDocument();
  });
});
