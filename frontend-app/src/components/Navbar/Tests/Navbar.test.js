import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  test("renders dashboard title", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const dashboardTitle = screen.getByText(/dashboard/i);
    expect(dashboardTitle).toBeInTheDocument();
  });

  test("renders Airlines link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const airlinesLink = screen.getByText(/airlines/i);
    expect(airlinesLink).toBeInTheDocument();
  });

  test("renders Airports link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const airportsLink = screen.getByText(/airports/i);
    expect(airportsLink).toBeInTheDocument();
  });

  test("renders Flights link", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const flightsLink = screen.getByText(/flights/i);
    expect(flightsLink).toBeInTheDocument();
  });
});
