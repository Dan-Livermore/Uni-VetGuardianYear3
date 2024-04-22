import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5Dental from "../../../../../Components/SymptomChecker/Dog/Face/Yes5Dental";

describe("Yes5Dental component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5Dental />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});