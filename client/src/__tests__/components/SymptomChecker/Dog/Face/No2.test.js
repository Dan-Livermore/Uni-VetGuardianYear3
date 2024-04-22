import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Single from "../../../../../Components/SymptomChecker/Dog/Face/No2Single";

describe("No2Single component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Single />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});