import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No2Walk from "../../../../../Components/SymptomChecker/Dog/Back/No2Walk";

describe("No2Walk component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No2Walk />
      </Router>
    );
    expect(screen.getByText("Does the difficulty seem to improve after movement?")).toBeInTheDocument();
  });
});
