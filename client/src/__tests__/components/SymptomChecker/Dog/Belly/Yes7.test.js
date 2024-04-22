import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes7Bad from "../../../../../Components/SymptomChecker/Dog/Belly/Yes7Bad";

describe("Yes7Bad component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes7Bad />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});