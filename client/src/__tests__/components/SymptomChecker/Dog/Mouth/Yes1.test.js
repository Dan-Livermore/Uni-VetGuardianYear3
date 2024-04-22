import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Yes1Yellowed from "../../../../../Components/SymptomChecker/Dog/Mouth/Yes1Yellowed";

describe("Yes1Yellowed component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Yes1Yellowed />
      </Router>
    );
    expect(screen.getByText("Is the bad breath accompanied by yellowing teeth or gum redness?")).toBeInTheDocument();
  });
});