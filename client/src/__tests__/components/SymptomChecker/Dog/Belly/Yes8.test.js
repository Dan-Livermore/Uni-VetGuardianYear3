import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes8Yelp from "../../../../../Components/SymptomChecker/Dog/Belly/Yes8Yelp";

describe("Yes8Yelp component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes8Yelp />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});