import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Odor from "../../../../../Components/SymptomChecker/Dog/Ear/Yes3Odor";

describe("Yes3Odor component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Odor />
      </Router>
    );
    expect(screen.getByText("Is the discharge black or yellowish and foul-smelling?")).toBeInTheDocument();
  });
});