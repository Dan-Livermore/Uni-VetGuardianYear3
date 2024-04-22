import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5Appetite from "../../../../../Components/SymptomChecker/Dog/Neck/Yes5Appetite";

describe("Yes5Appetite component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5Appetite />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});