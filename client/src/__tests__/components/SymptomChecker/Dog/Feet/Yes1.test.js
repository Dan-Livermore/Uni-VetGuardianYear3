import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Swelling from "../../../../../Components/SymptomChecker/Dog/Feet/Yes1Swelling";

describe("Yes1Swelling component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Swelling />
      </Router>
    );
    expect(screen.getByText("Is there a visible injury?")).toBeInTheDocument();
  });
});