import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes6 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes6";

describe("Yes6 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes6 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});