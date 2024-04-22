import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4Licking from "../../../../../Components/SymptomChecker/Dog/Feet/No4Licking";

describe("No4Licking component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4Licking />
      </Router>
    );
    expect(screen.getByText("Are there cracked pads or growths?")).toBeInTheDocument();
  });
});

