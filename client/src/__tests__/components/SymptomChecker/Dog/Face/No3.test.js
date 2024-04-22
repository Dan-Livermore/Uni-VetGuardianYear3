import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Cuts from "../../../../../Components/SymptomChecker/Dog/Face/No3Cuts";

describe("No3Cuts component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Cuts />
      </Router>
    );
    expect(screen.getByText("Is there any change in skin color, or are there rashes or sores?")).toBeInTheDocument();
  });
});