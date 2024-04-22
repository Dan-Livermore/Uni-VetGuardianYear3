import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes7 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes7";

describe("Yes7 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes7 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});