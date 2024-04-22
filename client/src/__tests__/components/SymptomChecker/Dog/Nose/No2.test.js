import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Clear from "../../../../../Components/SymptomChecker/Dog/Nose/No2Clear";

describe("No2Clear component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Clear />
      </Router>
    );
    expect(screen.getByText("Is the discharge thick, colored, or accompanied by sneezing?")).toBeInTheDocument();
  });
});