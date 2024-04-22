import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes12 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes12";

describe("Yes12 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes12 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});