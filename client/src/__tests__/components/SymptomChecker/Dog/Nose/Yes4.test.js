import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes4Bleeds from "../../../../../Components/SymptomChecker/Dog/Nose/Yes4Bleeds";

describe("Yes4Bleeds component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes4Bleeds />
      </Router>
    );
    expect(screen.getByText("Apply gentle pressure to stop the bleeding. If bleeding stops quickly, monitor closely. If recurrent or heavy, see a vet.")).toBeInTheDocument();
  });
});