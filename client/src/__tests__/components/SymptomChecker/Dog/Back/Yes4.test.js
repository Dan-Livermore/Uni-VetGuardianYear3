import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4Touch from "../../../../../Components/SymptomChecker/Dog/Back/Yes4Touch";

describe("Yes4Touch component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4Touch />
      </Router>
    );
    expect(screen.getByText("Does the dog react aggressively or whimper when the back is touched?")).toBeInTheDocument();
  });
});
