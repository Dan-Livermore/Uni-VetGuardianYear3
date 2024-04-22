import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No1 from "../../../../../Components/SymptomChecker/Dog/Legs/No1";

describe("No1 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No1 />
      </Router>
    );
    expect(screen.getByText("Did the symptoms appear gradually?")).toBeInTheDocument();
  });
});