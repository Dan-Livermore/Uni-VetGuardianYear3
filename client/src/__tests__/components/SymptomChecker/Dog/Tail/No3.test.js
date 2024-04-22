import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No3Bleeding from "../../../../../Components/SymptomChecker/Dog/Tail/No3Bleeding";

describe("No3Bleeding component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No3Bleeding />
      </Router>
    );
    expect(screen.getByText("Are there signs of skin irritation or infection on the tail?")).toBeInTheDocument();
  });
});
