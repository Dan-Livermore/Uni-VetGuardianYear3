import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes8 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes8";

describe("Yes8 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes8 />
      </Router>
    );
    expect(screen.getByText("Is the difficulty primarily in the hind legs?")).toBeInTheDocument();
  });
});