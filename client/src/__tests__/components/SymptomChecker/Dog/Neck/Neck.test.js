import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Neck from "../../../../../Components/SymptomChecker/Dog/Neck/Neck";

describe("Neck component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Neck />
      </Router>
    );
    expect(screen.getByText("Does the dog show signs of severe pain or cry out when moving?")).toBeInTheDocument();
  });
});
