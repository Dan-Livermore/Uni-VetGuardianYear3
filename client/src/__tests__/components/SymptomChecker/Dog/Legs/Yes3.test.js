import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes3";

describe("Yes3 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3 />
      </Router>
    );
    expect(screen.getByText("Is there stiffness, especially after rest?")).toBeInTheDocument();
  });
});