import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Swelling from "../../../../../Components/SymptomChecker/Dog/Feet/No1Swelling";

describe("No1Swelling component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Swelling />
      </Router>
    );
    expect(screen.getByText("Is your pet excessively licking / chewing on their paws?")).toBeInTheDocument();
  });
});

