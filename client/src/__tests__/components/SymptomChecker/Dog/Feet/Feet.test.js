import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Feet from "../../../../../Components/SymptomChecker/Dog/Feet/Feet";

describe("Feet component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Feet />
      </Router>
    );
    expect(screen.getByText("Is your dog limping or refusing to walk?")).toBeInTheDocument();
  });
});

