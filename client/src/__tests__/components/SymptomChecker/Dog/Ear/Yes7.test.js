import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes7Chewing from "../../../../../Components/SymptomChecker/Dog/Ear/Yes7Chewing";

describe("Yes7Chewing component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes7Chewing />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});