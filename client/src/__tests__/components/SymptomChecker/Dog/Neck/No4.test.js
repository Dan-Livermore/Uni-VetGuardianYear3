import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4Lumps from "../../../../../Components/SymptomChecker/Dog/Neck/No4Lumps";

describe("No4Lumps component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4Lumps />
      </Router>
    );
    expect(screen.getByText("Has there been a decrease in appetite or a change in behavior?")).toBeInTheDocument();
  });
});