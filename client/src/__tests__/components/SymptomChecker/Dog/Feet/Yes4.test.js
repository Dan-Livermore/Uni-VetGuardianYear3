import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4Licking from "../../../../../Components/SymptomChecker/Dog/Feet/Yes4Licking";

describe("Yes4Licking component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4Licking />
      </Router>
    );
    expect(screen.getByText("Are there signs of redness, swelling, or sores?")).toBeInTheDocument();
  });
});