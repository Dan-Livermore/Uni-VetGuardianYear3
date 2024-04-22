import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Legs from "../../../../../Components/SymptomChecker/Dog/Legs/Legs";

describe("Legs component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Legs />
      </Router>
    );
    expect(screen.getByText("Did the symptoms suddenly appear?")).toBeInTheDocument();
  });
});
