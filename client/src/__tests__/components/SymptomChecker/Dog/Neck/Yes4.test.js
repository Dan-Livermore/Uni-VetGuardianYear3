import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4Lumps from "../../../../../Components/SymptomChecker/Dog/Neck/Yes4Lumps";

describe("Yes4Lumps component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4Lumps />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});