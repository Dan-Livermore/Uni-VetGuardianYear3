import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Clean from "../../../../../Components/SymptomChecker/Dog/Mouth/Yes2Clean";

describe("Yes2Clean component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Clean />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});