import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Discharge from "../../../../../Components/SymptomChecker/Dog/Nose/No1Discharge";

describe("No1Discharge component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Discharge />
      </Router>
    );
    expect(screen.getByText("Is there a minor bleed without any apparent serious injury?")).toBeInTheDocument();
  });
});