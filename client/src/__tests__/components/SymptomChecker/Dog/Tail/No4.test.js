import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4Skin from "../../../../../Components/SymptomChecker/Dog/Tail/No4Skin";

describe("No4Skin component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4Skin />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
