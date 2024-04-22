import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Red from "../../../../../Components/SymptomChecker/Dog/Ear/No2Red";

describe("No2Red component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Red />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});