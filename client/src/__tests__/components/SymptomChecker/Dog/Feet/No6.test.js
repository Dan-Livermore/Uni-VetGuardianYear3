import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No6Pads from "../../../../../Components/SymptomChecker/Dog/Feet/No6Pads";

describe("No6Pads component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No6Pads />
      </Router>
    );
    expect(screen.getByText("Is there discharge or a foul odor?")).toBeInTheDocument();
  });
});
