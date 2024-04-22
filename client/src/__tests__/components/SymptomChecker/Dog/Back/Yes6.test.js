import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes6Jump from "../../../../../Components/SymptomChecker/Dog/Back/Yes6Jump";

describe("Yes6Jump component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes6Jump />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
