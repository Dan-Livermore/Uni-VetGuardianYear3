import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Cuts from "../../../../../Components/SymptomChecker/Dog/Face/Yes3Cuts";

describe("Yes3Cuts component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Cuts />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});