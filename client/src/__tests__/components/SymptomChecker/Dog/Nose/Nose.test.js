import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Nose from "../../../../../Components/SymptomChecker/Dog/Nose/Nose";

describe("Nose component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Nose />
      </Router>
    );
    expect(screen.getByText("Does your pet have discharge from the nose?")).toBeInTheDocument();
  });
});
