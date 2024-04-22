import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4Skin from "../../../../../Components/SymptomChecker/Dog/Face/Yes4Skin";

describe("Yes4Skin component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4Skin />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});