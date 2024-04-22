import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2 from "../../../../../Components/SymptomChecker/Dog/Legs/No2";

describe("No2 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2 />
      </Router>
    );
    expect(screen.getByText("Is the dog unable to bear weight at all?")).toBeInTheDocument();
  });
});