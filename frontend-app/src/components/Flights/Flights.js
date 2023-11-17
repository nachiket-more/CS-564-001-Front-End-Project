import React from "react";
import "./Flights.css";
import UsGeoMap from "./charts/UsGeoMap";
import FlightsTable from "./charts/FlightsTable";

const Flights = () => {
  return (
    <div className="flights-container">
      <div className="top">
        {/* <div className="card-container airlines-card">
          <div className="card-title">Flights by Airlines</div>
          <div className="airlines">
          </div>
        </div> */}
      </div>

      <div className="bottom">
        <div className="card-container usmap-card">
          <div>
            <div className="card-title">Flights Distribution</div>
            <div className="usmap-flights">{/* <UsGeoMap /> */}</div>
          </div>
        </div>

        <div className="card-container flights-list-card">
          <div>
            <div className="card-title">Flights</div>
            <div className="flights-list">{<FlightsTable />}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Flights;
