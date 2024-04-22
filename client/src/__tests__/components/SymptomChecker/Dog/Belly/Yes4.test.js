import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4Frequent from "../../../../../Components/SymptomChecker/Dog/Belly/Yes4Frequent";

describe("Yes4Frequent component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4Frequent />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});