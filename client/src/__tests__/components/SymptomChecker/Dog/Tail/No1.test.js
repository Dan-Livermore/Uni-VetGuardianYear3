import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Limp from "../../../../../Components/SymptomChecker/Dog/Tail/No1Limp";

describe("No1Limp component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Limp />
      </Router>
    );
    expect(screen.getByText("Does the dog seem to be in pain when the tail is touched?")).toBeInTheDocument();
  });
});
