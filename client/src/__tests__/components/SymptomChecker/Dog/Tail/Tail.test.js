import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Tail from "../../../../../Components/SymptomChecker/Dog/Tail/Tail";

describe("Tail component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Tail />
      </Router>
    );
    expect(screen.getByText("Is the tail limp or not wagging?")).toBeInTheDocument();
  });
});
