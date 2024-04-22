import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes5";

describe("Yes5 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});