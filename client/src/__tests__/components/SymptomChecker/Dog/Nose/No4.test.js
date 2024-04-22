import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4Bleeds from "../../../../../Components/SymptomChecker/Dog/Nose/No4Bleeds";

describe("No4Bleeds component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4Bleeds />
      </Router>
    );
    expect(screen.getByText("Is the bleeding heavy or does it persist?")).toBeInTheDocument();
  });
});