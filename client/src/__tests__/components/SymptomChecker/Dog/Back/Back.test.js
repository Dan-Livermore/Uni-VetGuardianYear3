import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Back from "../../../../../Components/SymptomChecker/Dog/Back/Back";

describe("Back component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <Back />
      </Router>
    );
    expect(screen.getByText("Does your dog have difficultly standing or walking?")).toBeInTheDocument();
  });
});
