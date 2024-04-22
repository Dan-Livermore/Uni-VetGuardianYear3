import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No5Appetite from "../../../../../Components/SymptomChecker/Dog/Neck/No5Appetite";

describe("No5Appetite component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No5Appetite />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});