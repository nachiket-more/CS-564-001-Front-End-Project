import React from "react";
import "./Airlines.css";

const Airlines = () => {
  return (
    <div className="airlines-container">
      <div className="top">
        <div className="card-container airlines-card">
          <div className="card-title">Airlines</div>
          <div className="card airlines"></div>
        </div>

        <div className="card-container airline-delays-card">
          <div className="card-title">Airlines Delays</div>
          <div className="card airline-delays"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="card-container history-card">
          <div className="card-title">Historical Performance</div>
          <div className="card history-delays"></div>
        </div>
      </div>
    </div>
  );
};

export default Airlines;
