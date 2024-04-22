import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Moves from "../../../../../Components/SymptomChecker/Dog/Neck/Yes1Moves";

describe("Yes1Moves component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Moves />
      </Router>
    );
    expect(screen.getByText("Does the dog show signs of severe pain or cry out when moving?")).toBeInTheDocument();
  });
});