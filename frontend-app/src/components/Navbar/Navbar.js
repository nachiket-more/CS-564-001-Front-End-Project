import React from "react";
import { Link as NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";

const Navbar = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-auto col-md-2 min-vh-100 bg-dark">
            <h1 className="logo d-flex ms-3 mt-2 d-none d-sm-inline">
              <span className="ms-1 fs-4 d-none d-sm-inline">AeroGraph</span>
            </h1>
            <hr className="text-secondary d-none d-sm-block" />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
              {/* Navbar Links */}
              {[
                { to: "/airlines", icon: "bi bi-airplane-fill", label: "Airlines" },
                { to: "/airports", icon: "bi bi-geo-alt-fill", label: "Airports" },
                { to: "/flights", icon: "bi bi-airplane-engines-fill", label: "Flights" },
              ].map((link, index) => (
                <li key={index} className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <NavLink to={link.to} className="nav-link text-white fs-5" aria-current="page">
                    <i className={link.icon}></i>
                    <span className="ms-3 d-none d-sm-inline">{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
