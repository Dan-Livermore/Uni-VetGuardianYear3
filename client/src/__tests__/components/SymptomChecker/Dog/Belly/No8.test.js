import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No8Yelp from "../../../../../Components/SymptomChecker/Dog/Belly/No8Yelp";

describe("No8Yelp component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No8Yelp />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});