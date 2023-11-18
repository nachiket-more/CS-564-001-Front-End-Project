import React from "react";
import { Link as NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="col col-md-2 min-vh-100 bg-dark">
        <h1 className="logo d-flex d-none d-sm-inline">
          <span className="fs-4 d-none d-sm-inline">AeroGraph</span>
        </h1>
        <hr className="text-secondary d-none d-sm-block" />
        <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
          {/* Navbar Links */}
          {[
            { to: "/airlines", label: "Airlines" },
            { to: "/airports", label: "Airports" },
            { to: "/flights", label: "Flights" },
          ].map((link, index) => (
            <li key={index} className="nav-item fs-4 my-1 py-2 py-sm-0">
              <NavLink
                to={link.to}
                className="nav-link text-white fs-5"
                aria-current="page"
              >
                <span className="d-none d-sm-inline">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
