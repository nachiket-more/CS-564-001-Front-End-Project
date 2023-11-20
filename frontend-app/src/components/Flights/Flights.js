import React from "react";
import "./Flights.css";
import UsGeoMap from "./charts/UsGeoMap";
import FlightsTable from "./charts/FlightsTable";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";

import { DataContext } from "../../context/DataContext";

const Flights = () => {
  // const airlinesData = useSelector((state) => state.airlines.airlinesData);

  const data = React.useContext(DataContext);
  const [airlinesData, setAirlinesData] = React.useState(null);
  const [flightsData, setFlightsData] = React.useState(null);
  const [airportsData, setAirportsData] = React.useState(null);


  const [key, setKey] = React.useState(0);

  const [selectedAirline, setSelectedAirline] = React.useState(
    "American Airlines Inc."
  );

  React.useEffect(() => {
    if (
      data.airportsData != null &&
      data.flightsData != null &&
      data.airlinesData != null
    ) {
      console.log(data);
      setAirlinesData(data.airlinesData);
      setFlightsData(data.flightsData);
      setAirportsData(data.airportsData);
    }
  }, [data]);

  const handleSelectedAirline = (selectedItem) => {
    setSelectedAirline(selectedItem);

    // setHistoryData(handleHistoryData(airlineCode));
  };

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [selectedAirline]);

  // React.useEffect(()=>{
  //   if (airportsData && flightsData && airlinesData) {
  //     handleSelectedAirline("Virgin America")
  //   }
  // },[airportsData, flightsData, airlinesData])

  
  const [totalAirlines, setTotalAirlines] = React.useState(13);
  const [totalFlights, setTotalFlights] = React.useState(null);
  const [totalOrigins, setTotalOrigins] = React.useState(null);
  const [totalDest, setTotalDest] = React.useState(null);

  const handleFlightValues = (data) =>{
    // console.log('Flight values from Flight.js: ', data)
    setTotalFlights(data.total_flights)
    setTotalOrigins(data.total_origins)
    setTotalDest(data.total_dest)
  }

  return (
    <div>
      {airlinesData != null && (
        <div className="page-container flights-container">
          <div className="top">
            <div className="card-container airlines-card" id="total-airlines">
              <div className="card-title">Total Airlines</div>
              <div className="flights-values">{totalAirlines}</div>
            </div>
            <div className="card-container airlines-card"id="total-flights">
              <div className="card-title">Total Flights</div>
              <div className="flights-values">{totalFlights}</div>
            </div>
            <div className="card-container airlines-card"id="total-origin">
              <div className="card-title">No. of Origin</div>
              <div className="flights-values">{totalOrigins}</div>
            </div>
            
            <div className="card-container airlines-card"id="total-dest">
              <div className="card-title">No. of Dest</div>
              <div className="flights-values">{totalDest}</div>
            </div>
          </div>

          <div className="bottom">
            <div className="card-container usmap-card">
              <div>
                <div className="card-title">Flights Distribution</div>
                <Dropdown onSelect={handleSelectedAirline}>
                  <Dropdown.Toggle className="btn-primary" id="dropdown-basic">
                    {selectedAirline}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {[
                      ...new Set(airlinesData.map((flight) => flight.AIRLINE)),
                    ].map((item, index) => (
                      <Dropdown.Item key={index} eventKey={item} href="">
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="usmap-flights">
                <UsGeoMap key={key} selectedAirline={selectedAirline} flightValues={handleFlightValues} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flights;
