import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Belly from "../../../../../Components/SymptomChecker/Dog/Belly/Belly";

describe("Belly component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Belly />
      </Router>
    );
    expect(screen.getByText("Is there a swelling on the area?")).toBeInTheDocument();
  });
});
