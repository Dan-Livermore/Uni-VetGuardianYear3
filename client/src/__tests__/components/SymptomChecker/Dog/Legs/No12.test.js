import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No12 from "../../../../../Components/SymptomChecker/Dog/Legs/No12";

describe("No12 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No12 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});