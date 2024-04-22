import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Discharge from "../../../../../Components/SymptomChecker/Dog/Nose/Yes1Discharge";

describe("Yes1Discharge component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Discharge />
      </Router>
    );
    expect(screen.getByText("Is the discharge clear and watery?")).toBeInTheDocument();
  });
});