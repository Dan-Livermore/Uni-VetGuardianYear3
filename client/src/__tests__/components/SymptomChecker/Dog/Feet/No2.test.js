import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Visible from "../../../../../Components/SymptomChecker/Dog/Feet/No2Visible";

describe("No2Visible component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Visible />
      </Router>
    );
    expect(screen.getByText("Is there any swelling or sensitive between the toes or on the pads?")).toBeInTheDocument();
  });
});

