import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes6Pads from "../../../../../Components/SymptomChecker/Dog/Feet/Yes6Pads";

describe("Yes6Pads component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes6Pads />
      </Router>
    );
    expect(screen.getByText("Potential Symptoms")).toBeInTheDocument();
  });
});