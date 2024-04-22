import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Eating from "../../../../../Components/SymptomChecker/Dog/Mouth/Yes3Eating";

describe("Yes3Eating component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Eating />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});