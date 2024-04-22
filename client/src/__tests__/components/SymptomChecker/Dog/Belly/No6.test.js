import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No6Diah from "../../../../../Components/SymptomChecker/Dog/Belly/No6Diah";

describe("No6Diah component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No6Diah />
      </Router>
    );
    expect(screen.getByText("Is there signs of diarrhea?")).toBeInTheDocument();
  });
});