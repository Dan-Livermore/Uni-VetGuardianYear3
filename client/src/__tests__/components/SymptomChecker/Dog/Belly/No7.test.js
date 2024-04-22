import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No7Bad from "../../../../../Components/SymptomChecker/Dog/Belly/No7Bad";

describe("No7Bad component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No7Bad />
      </Router>
    );
    expect(screen.getByText("Does the dog yelp or resist touch on the belly?")).toBeInTheDocument();
  });
});