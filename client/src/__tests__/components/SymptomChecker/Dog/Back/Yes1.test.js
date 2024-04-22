import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Standing from "../../../../../Components/SymptomChecker/Dog/Back/Yes1Standing";

describe("Yes1Standing component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Standing />
      </Router>
    );
    expect(screen.getByText("Is the dog unable to stand or walk at all?")).toBeInTheDocument();
  });
});
