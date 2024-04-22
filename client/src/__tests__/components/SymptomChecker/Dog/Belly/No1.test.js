import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Swollen from "../../../../../Components/SymptomChecker/Dog/Belly/No1Swollen";

describe("No1Swollen component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Swollen />
      </Router>
    );
    expect(screen.getByText("Is your dog vomitting?")).toBeInTheDocument();
  });
});
