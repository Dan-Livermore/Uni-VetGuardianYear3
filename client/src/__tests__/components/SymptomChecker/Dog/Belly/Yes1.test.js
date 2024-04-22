import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Swollen from "../../../../../Components/SymptomChecker/Dog/Belly/Yes1Swollen";

describe("Yes1Swollen component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Swollen />
      </Router>
    );
    expect(screen.getByText("Is the belly significantly swollen and tight?")).toBeInTheDocument();
  });
});