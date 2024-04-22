import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Single from "../../../../../Components/SymptomChecker/Dog/Face/Yes2Single";

describe("Yes2Single component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Single />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});