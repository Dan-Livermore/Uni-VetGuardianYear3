import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Swelling from "../../../../../Components/SymptomChecker/Dog/Face/Yes1Swelling";

describe("Yes1Swelling component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Swelling />
      </Router>
    );
    expect(screen.getByText("Is the swelling localized to one area (e.g., around the eye, mouth, or cheek)?")).toBeInTheDocument();
  });
});