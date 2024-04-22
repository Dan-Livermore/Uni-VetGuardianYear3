import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No5Aggressive from "../../../../../Components/SymptomChecker/Dog/Back/No5Aggressive";

describe("No5Aggressive component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No5Aggressive />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
