import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes4";

describe("Yes4 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});