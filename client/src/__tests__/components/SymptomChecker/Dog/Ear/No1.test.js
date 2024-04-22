import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Scratching from "../../../../../Components/SymptomChecker/Dog/Ear/No1Scratching";

describe("No1Scratching component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Scratching />
      </Router>
    );
    expect(screen.getByText("Is there odor or discharge from the ear?")).toBeInTheDocument();
  });
});