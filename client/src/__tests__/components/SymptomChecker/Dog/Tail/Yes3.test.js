import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes3Bleeding from "../../../../../Components/SymptomChecker/Dog/Tail/Yes3Bleeding";

describe("Yes3Bleeding component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes3Bleeding />
      </Router>
    );
    expect(screen.getByText("Potential Symptom")).toBeInTheDocument();
  });
});
