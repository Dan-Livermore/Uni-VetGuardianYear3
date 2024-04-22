import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Clean from "../../../../../Components/SymptomChecker/Dog/Mouth/No2Clean";

describe("No2Clean component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Clean />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});