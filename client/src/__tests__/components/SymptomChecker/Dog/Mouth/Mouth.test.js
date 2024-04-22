import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Mouth from "../../../../../Components/SymptomChecker/Dog/Mouth/Mouth";

describe("Mouth component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Mouth />
      </Router>
    );
    expect(screen.getByText("Does your dog have bad breath?")).toBeInTheDocument();
  });
});
