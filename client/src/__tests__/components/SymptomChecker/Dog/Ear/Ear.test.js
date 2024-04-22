import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Ear from "../../../../../Components/SymptomChecker/Dog/Ear/Ear";

describe("Ear component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Ear />
      </Router>
    );
    expect(screen.getByText("Is your dog scratching at its ears?")).toBeInTheDocument();
  });
});