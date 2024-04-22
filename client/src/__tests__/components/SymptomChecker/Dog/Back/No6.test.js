import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No6Jump from "../../../../../Components/SymptomChecker/Dog/Back/No6Jump";

describe("No6Jump component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No6Jump />
      </Router>
    );
    expect(screen.getByText("Has the dog shown signs of incontinence or partial paralysis?")).toBeInTheDocument();
  });
});
