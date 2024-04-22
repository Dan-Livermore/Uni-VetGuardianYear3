import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes2Recent from "../../../../../Components/SymptomChecker/Dog/Tail/Yes2Recent";

describe("Yes2Recent component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes2Recent />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
