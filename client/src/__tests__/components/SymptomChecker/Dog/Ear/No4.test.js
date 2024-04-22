import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4Balance from "../../../../../Components/SymptomChecker/Dog/Ear/No4Balance";

describe("No4Balance component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4Balance />
      </Router>
    );
    expect(screen.getByText("Are there signs of pain when opening the mouth or chewing?")).toBeInTheDocument();
  });
});