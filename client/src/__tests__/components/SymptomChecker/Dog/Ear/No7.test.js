import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No7Chewing from "../../../../../Components/SymptomChecker/Dog/Ear/No7Chewing";

describe("No7Chewing component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No7Chewing />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});