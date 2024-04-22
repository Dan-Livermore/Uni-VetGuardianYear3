import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes5Eating from "../../../../../Components/SymptomChecker/Dog/Belly/Yes5Eating";

describe("Yes5Eating component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes5Eating />
      </Router>
    );
    expect(screen.getByText("Has the dog stopped eating or changed its bathroom habits drastically?")).toBeInTheDocument();
  });
});