import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Walk from "../../../../../Components/SymptomChecker/Dog/Back/Yes2Walk";

describe("Yes2Walk component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Walk />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
