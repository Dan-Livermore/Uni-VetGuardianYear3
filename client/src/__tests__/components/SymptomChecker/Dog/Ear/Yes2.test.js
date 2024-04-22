import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Red from "../../../../../Components/SymptomChecker/Dog/Ear/Yes2Red";

describe("Yes2Red component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Red />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});