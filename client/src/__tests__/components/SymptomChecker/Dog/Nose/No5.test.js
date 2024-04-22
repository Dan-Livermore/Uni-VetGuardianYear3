import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No5Persists from "../../../../../Components/SymptomChecker/Dog/Nose/No5Persists";

describe("No5Persists component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No5Persists />
      </Router>
    );
    expect(screen.getByText("Has the nose become unusually dry or cracked?")).toBeInTheDocument();
  });
});