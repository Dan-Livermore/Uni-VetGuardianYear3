import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes2";

describe("Yes2 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2 />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});