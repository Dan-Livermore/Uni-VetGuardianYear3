import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes11 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes11";

describe("Yes11 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes11 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});