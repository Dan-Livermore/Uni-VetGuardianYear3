import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes10 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes10";

describe("Yes10 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes10 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});