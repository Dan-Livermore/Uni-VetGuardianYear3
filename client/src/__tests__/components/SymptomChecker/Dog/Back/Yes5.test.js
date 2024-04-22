import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5Aggressive from "../../../../../Components/SymptomChecker/Dog/Back/Yes5Aggressive";

describe("Yes5Aggressive component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5Aggressive />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
