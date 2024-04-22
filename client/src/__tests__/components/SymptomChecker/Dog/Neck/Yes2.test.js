import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Crying from "../../../../../Components/SymptomChecker/Dog/Neck/Yes2Crying";

describe("Yes2Crying component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Crying />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});