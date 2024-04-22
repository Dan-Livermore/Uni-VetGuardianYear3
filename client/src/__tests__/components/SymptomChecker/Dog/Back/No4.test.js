import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No4Touch from "../../../../../Components/SymptomChecker/Dog/Back/No4Touch";

describe("No4Touch component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No4Touch />
      </Router>
    );
    expect(screen.getByText("Is there a noticeable hunch in the back or reluctance to jump/climb?")).toBeInTheDocument();
  });
});
