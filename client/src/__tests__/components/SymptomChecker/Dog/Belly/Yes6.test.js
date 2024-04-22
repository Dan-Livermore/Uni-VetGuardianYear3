import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes6Diah from "../../../../../Components/SymptomChecker/Dog/Belly/Yes6Diah";

describe("Yes6Diah component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes6Diah />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});