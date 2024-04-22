import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Move from "../../../../../Components/SymptomChecker/Dog/Back/Yes3Move";

describe("Yes3Move component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Move />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
