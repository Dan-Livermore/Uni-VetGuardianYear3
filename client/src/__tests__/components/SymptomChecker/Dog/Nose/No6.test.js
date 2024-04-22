import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No6Appearance from "../../../../../Components/SymptomChecker/Dog/Nose/No6Appearance";

describe("No6Appearance component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No6Appearance />
      </Router>
    );
    expect(screen.getByText("Does the nose show signs of ulceration or discoloration?")).toBeInTheDocument();
  });
});