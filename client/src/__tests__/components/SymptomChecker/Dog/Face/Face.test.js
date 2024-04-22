import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Face from "../../../../../Components/SymptomChecker/Dog/Face/Face";

describe("Face component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Face />
      </Router>
    );
    expect(screen.getByText("Does your dog's face have a swelling?")).toBeInTheDocument();
  });
});