import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No5Redness from "../../../../../Components/SymptomChecker/Dog/Feet/No5Redness";

describe("No5Redness component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No5Redness />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});

