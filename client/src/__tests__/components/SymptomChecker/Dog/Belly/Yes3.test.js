import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Vomit from "../../../../../Components/SymptomChecker/Dog/Belly/Yes3Vomit";

describe("Yes3Vomit component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Vomit />
      </Router>
    );
    expect(screen.getByText("Is the vomiting frequent or accompanied by blood?")).toBeInTheDocument();
  });
});