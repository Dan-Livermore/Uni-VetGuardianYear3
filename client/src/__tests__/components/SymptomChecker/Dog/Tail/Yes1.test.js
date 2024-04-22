import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Limp from "../../../../../Components/SymptomChecker/Dog/Tail/Yes1Limp";

describe("Yes1Limp component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Limp />
      </Router>
    );
    expect(screen.getByText("Was there a recent injury or trauma to the tail?")).toBeInTheDocument();
  });
});
