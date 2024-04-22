import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4 from "../../../../../Components/SymptomChecker/Dog/Legs/No4";

describe("No4 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4 />
      </Router>
    );
    expect(screen.getByText("Does the dog show reluctance to move, jump, or play?")).toBeInTheDocument();
  });
});