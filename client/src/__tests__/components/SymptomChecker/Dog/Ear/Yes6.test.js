import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes6Tilt from "../../../../../Components/SymptomChecker/Dog/Ear/Yes6Tilt";

describe("Yes6Tilt component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes6Tilt />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});