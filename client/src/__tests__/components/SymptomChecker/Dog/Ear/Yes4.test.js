import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4Balance from "../../../../../Components/SymptomChecker/Dog/Ear/Yes4Balance";

describe("Yes4Balance component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4Balance />
      </Router>
    );
    expect(screen.getByText("Does the dog seem to hear less or is tilting its head?")).toBeInTheDocument();
  });
});