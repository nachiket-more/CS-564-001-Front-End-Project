import React, { useState } from "react";

import Tooltip from "@mui/material/Tooltip";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DataContext } from "../../../context/DataContext";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const UsGeoMap = ({ selectedAirline,selectedOrigin, flightValues, flightOriginsData }) => {
  const data = React.useContext(DataContext);
  const [airlinesData, setAirlinesData] = React.useState(null);
  const [flightsData, setFlightsData] = React.useState(null);
  const [airportsData, setAirportsData] = React.useState(null);

  const [routesData, setRoutesData] = React.useState(null);
  const [markersData, setMarkersData] = React.useState(null);
  const [routesTable, setRoutesTable] = React.useState([]);

  const [key, setKey] = React.useState(0);

  const [flightOrigins, setFlightOrigins] = React.useState({});

  React.useEffect(() => {
    if (airportsData && flightsData && airlinesData) {
      handleSetRoutes(selectedAirline);
    }
  }, [airportsData, flightsData, airlinesData]);

  React.useEffect(() => {
    if (
      data.airportsData != null &&
      data.flightsData != null &&
      data.airlinesData != null
    ) {
      setAirlinesData(data.airlinesData);
      setFlightsData(data.flightsData);
      setAirportsData(data.airportsData);
    }
  }, [data]);

  const handleSetRoutes = (selectedItem) => {
    const airlineCode = airlinesData.find(
      (airline) => airline.AIRLINE === selectedItem
    ).IATA_CODE;

    // console.log("Airlines is: ", selectedItem, airlineCode);

    const airlineFlights = flightsData.filter(
      (flights) => flights.AIRLINE === airlineCode
    );

    const routes = airlineFlights.map(
      ({ ORIGIN_AIRPORT, DESTINATION_AIRPORT }) => ({
        dep_code: ORIGIN_AIRPORT,
        dep:
          airportsData.find((airport) => airport.IATA_CODE === ORIGIN_AIRPORT)
            ?.CITY || ORIGIN_AIRPORT,
        arr_code: DESTINATION_AIRPORT,
        arr:
          airportsData.find(
            (airport) => airport.IATA_CODE === DESTINATION_AIRPORT
          )?.CITY || DESTINATION_AIRPORT,
      })
    );

    // console.log("Flight Routes are: ", routes);
    const origins = new Set(routes.map((obj) => obj.dep));
    setFlightOrigins(origins);
    flightOriginsData(origins);

    const flightRows = [];
    routes.forEach((item) => {
      let newData = createData(
        item.dep,
        item.dep_code,
        item.arr,
        item.arr_code
      );
      flightRows.push(newData);
    });

    setRoutesTable(flightRows);

    const markers = Array.from(
      new Set(routes.flatMap((route) => [route.dep, route.arr]))
    ).map((city) => {
      const airport = airportsData.find((airport) => airport.CITY === city);
      return airport
        ? {
            markerOffset: 0,
            code: airport.IATA_CODE,
            city,
            coordinates: [airport.LONGITUDE, airport.LATITUDE],
          }
        : null;
    });
    // console.log("Flight Markers are: ", markers);
    setRoutesData(routes);
    setMarkersData(markers);

    // flightValues()
    flightValues({
      total_flights: routes.length,
      total_origins: new Set(routes.map((obj) => obj.dep)).size,
      total_dest: new Set(routes.map((obj) => obj.arr)).size,
    });
  };

  function createData(Origin, Origin_Code, Dest, Dest_Code) {
    return { Origin, Origin_Code, Dest, Dest_Code };
  }
  

  const [selectedRoute, setSelectedRoute] = useState({});

  const [updateKey, setUpdateKey] = useState(0);

  const handleSelectFlight = (event, rowData) => {
    setSelectedRoute({
      dep: markersData.find((marker) => marker.city === rowData.Origin)
        .coordinates,
      arr: markersData.find((marker) => marker.city === rowData.Dest)
        .coordinates,
    });
  };

  React.useEffect(() => {
    setUpdateKey(updateKey + 1);
  }, [selectedRoute]);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* <button onClick={handleButtonClick}>Change Line Color</button> */}
      {markersData != null && (
        <ComposableMap
          style={{ width: "100%", height: "100%" }}
          projection="geoAlbersUsa"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#fff"
                    geography={geo}
                    fill="#e6e6e6"
                  />
                ))}

                {routesData.map((route, index) => {
                  var from = null;
                  var to = null;

                  if (route.dep === selectedOrigin) {
                    from = markersData.find(
                      (marker) => marker.city === selectedOrigin
                    );
                    to = markersData.find(
                      (marker) => marker.city === route.arr
                    );
                    return (
                      <Line
                        key={updateKey}
                        from={from.coordinates}
                        to={to.coordinates}
                        stroke="#9055A2"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    );
                  }
                })}

                {markersData.map(
                  ({ markerOffset, code, city, coordinates }) => {
                    return (
                      <Tooltip title={city} placement="top">
                        <Marker
                          key={city}
                          coordinates={coordinates}
                          data-tip={code}
                          data-for={`tooltip-${city}`}
                        >
                          <circle
                            r={3}
                            fill="#011638"
                            stroke="#011638"
                            strokeWidth={2}
                          />
                        </Marker>
                      </Tooltip>
                    );
                  }
                )}
              </>
            )}
          </Geographies>
        </ComposableMap>
      )}

      <div className="card-container flights-list-card">
        {/* <div className="card-title">{selectedAirline} Flights</div> */}
        <div className="flights-list">
          {routesTable.length > 1 && (
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {routesTable.map((row) => (
                    <TableRow
                      key={row.airline}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      onClick={(event) => handleSelectFlight(event, row)}
                    >
                      <TableCell align="center" style={{ minWidth: 0 }}>
                        {row.Origin}
                      </TableCell>
                      <TableCell align="center" style={{ minWidth: 0 }}>
                        {row.Dest}
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
  );
};

export default UsGeoMap;
