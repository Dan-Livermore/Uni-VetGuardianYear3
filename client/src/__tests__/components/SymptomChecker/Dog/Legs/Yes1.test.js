import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1 from "../../../../../Components/SymptomChecker/Dog/Legs/Yes1";

describe("Yes1 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1 />
      </Router>
    );
    expect(screen.getByText("Is there visible signs of injury?")).toBeInTheDocument();
  });
});
