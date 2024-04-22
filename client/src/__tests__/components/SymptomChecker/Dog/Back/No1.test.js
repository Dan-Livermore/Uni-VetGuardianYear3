import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1Standing from "../../../../../Components/SymptomChecker/Dog/Back/No1Standing";

describe("No1Standing component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1Standing />
      </Router>
    );
    expect(screen.getByText("Is your pet in visible pain when touched?")).toBeInTheDocument();
  });
});
