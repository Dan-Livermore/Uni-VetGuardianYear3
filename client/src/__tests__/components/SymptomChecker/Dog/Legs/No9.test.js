import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import No9 from "../../../../../Components/SymptomChecker/Dog/Legs/No9";

describe("No9 component", () => {
  test("Renders page without crashing", () => {
    render(
      <Router>
        <No9 />
      </Router>
    );
    expect(screen.getByText("Does the dog seem to experience pain during colder weather or after certain activities?")).toBeInTheDocument();
  });
});