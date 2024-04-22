import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Scratching from "../../../../../Components/SymptomChecker/Dog/Ear/Yes1Scratching";

describe("Yes1Scratching component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Scratching />
      </Router>
    );
    expect(screen.getByText("Is there visible redness or swelling inside the ear?")).toBeInTheDocument();
  });
});