import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Recent from "../../../../../Components/SymptomChecker/Dog/Tail/No2Recent";

describe("No2Recent component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Recent />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
