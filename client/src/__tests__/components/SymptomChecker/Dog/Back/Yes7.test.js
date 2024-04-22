import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes7Paralysis from "../../../../../Components/SymptomChecker/Dog/Back/Yes7Paralysis";

describe("Yes7Paralysis component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes7Paralysis />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
