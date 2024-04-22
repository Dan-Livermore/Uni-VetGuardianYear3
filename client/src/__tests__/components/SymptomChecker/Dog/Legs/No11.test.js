import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No11 from "../../../../../Components/SymptomChecker/Dog/Legs/No11";

describe("No11 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No11 />
      </Router>
    );
    expect(screen.getByText("Does the dog frequently lick or bite at its legs or paws?")).toBeInTheDocument();
  });
});