import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes9 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes9";

describe("Yes9 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes9 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});