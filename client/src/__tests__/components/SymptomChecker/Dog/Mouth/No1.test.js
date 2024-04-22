import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Yellowed from "../../../../../Components/SymptomChecker/Dog/Mouth/No1Yellowed";

describe("No1Yellowed component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Yellowed />
      </Router>
    );
    expect(screen.getByText("Does the dog seem to have pain when eating?")).toBeInTheDocument();
  });
});