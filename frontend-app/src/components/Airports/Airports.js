import React from "react";
import "./Airports.css";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Dropdown from "react-bootstrap/Dropdown";

import { DataContext } from "../../context/DataContext";

import UsAirportMap from "./charts/UsAirportMap";
import AirportsBarChart from "./charts/AirportsBarChart";

const Airports = () => {
  const data = React.useContext(DataContext);
  const [airlinesData, setAirlinesData] = React.useState(null);
  const [flightsData, setFlightsData] = React.useState(null);
  const [airportsData, setAirportsData] = React.useState(null);
  const [trafficData, setTrafficData] = React.useState([]);

  const [key, setKey] = React.useState(0);

  const [markersData, setMarkersData] = React.useState([]);

  React.useEffect(() => {
    if (
      data.airportsData != null &&
      data.flightsData != null &&
      data.airlinesData != null
    ) {
      console.log(data.airportsData);
      setAirlinesData(data.airlinesData);
      setFlightsData(data.flightsData);
      setAirportsData(data.airportsData);
    }
  }, [data]);

  const [selectedState, setSelectedState] = React.useState("WA");

  const handleSelectedState = (selectedItem) => {
    setSelectedState(selectedItem);
  };

  React.useEffect(() => {
    if (airportsData != null) {
      handlesetMarkers(selectedState);

      getTrafficData(selectedState);
    }
  }, [selectedState, airportsData]);

  const handlesetMarkers = (selectedItem) => {
    const markers = airportsData
      .filter((airport) => airport.STATE === selectedItem)
      .map((airport) => ({
        markerOffset: 0,
        code: airport.IATA_CODE,
        city: airport.CITY,
        coordinates: [airport.LONGITUDE, airport.LATITUDE],
      }));

    setMarkersData(markers);
  };

  const getTrafficData = (selectedState) => {
    console.log(selectedState);
    const filteredAirports = airportsData
      .filter((airport) => airport.STATE === selectedState)
      .map(({ CITY, IATA_CODE }) => ({ city: CITY, code: IATA_CODE }));

      const result = [["City", "Traffic"]].concat(
        filteredAirports.map(({ city, code }) => {
          const depCount = flightsData.filter(
            (flight) => flight.ORIGIN_AIRPORT === code
          ).length;
          const arrCount = flightsData.filter(
            (flight) => flight.DESTINATION_AIRPORT === code
          ).length;
      
          const traffic = depCount + arrCount;
      
          return [city, traffic];
        })
      );
      
      console.log(result)
    setTrafficData(result);
  };

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [markersData]);

  return (
    <div className="page-container airports-container">
      <div className="top">
        <div className="card-container airports-map-card">
          <div>
            <div className="card-title">Airport Distribution</div>
            {airportsData != null && (
              <Dropdown onSelect={handleSelectedState}>
                <Dropdown.Toggle className="btn-primary" id="dropdown-basic">
                  {selectedState}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {[
                    ...new Set(airportsData.map((airport) => airport.STATE)),
                  ].map((item, index) => (
                    <Dropdown.Item key={index} eventKey={item} href="">
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
          <div className="airports-map">
            <UsAirportMap markersData={markersData} key={key} />
          </div>
        </div>

        <div className="card-container busiest-airports-card">
          <div className="card-title">Cities with Busiest Airports</div>
          <div className="busiest-airports">
            {
              trafficData!=[] &&
              <AirportsBarChart trafficData={trafficData} styled={{height: "100%", width: "fit-content", margin: "0 auto" }}/>
            }
            
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="card-container airports-list-card">
        <div className="airports-list">
        {airportsData != null && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 0 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ minWidth: 0 }}>
                      ORIGIN
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 0 }}>
                      DESTINATION
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 0 }}>
                      CITY
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 0 }}>
                      STATE
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {airportsData.map((row) => (
                    <TableRow
                      key={row.AIRPORT}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" style={{ minWidth: 0 }}>
                        {row.IATA_CODE}
                      </TableCell>
                      <TableCell align="center" style={{ minWidth: 0 }}>
                        {row.AIRPORT}
                      </TableCell>
                      <TableCell align="center" style={{ minWidth: 0 }}>
                        {row.CITY}
                      </TableCell>
                      <TableCell align="center" style={{ minWidth: 0 }}>
                        {row.STATE}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
        </div>

      </div>
    </div>
  );
};

export default Airports;
