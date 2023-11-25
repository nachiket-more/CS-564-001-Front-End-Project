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

const UsAirportMap = ({markersData}) => {
  const data = React.useContext(DataContext);
  const [airlinesData, setAirlinesData] = React.useState(null);
  const [flightsData, setFlightsData] = React.useState(null);
  const [airportsData, setAirportsData] = React.useState(null);

  
  // const [markersData, setMarkersData] = React.useState([]);


  // React.useEffect(() => {
  //   if (
  //     data.airportsData != null &&
  //     data.flightsData != null &&
  //     data.airlinesData != null
  //   ) {
  //     setAirlinesData(data.airlinesData);
  //     setFlightsData(data.flightsData);
  //     setAirportsData(data.airportsData);
  //   }
  // }, [data]);

  // React.useEffect(() => {
  //   if (airportsData && flightsData && airlinesData) {
  //     handlesetMarkers();
      
  //   }
  // }, [airportsData, flightsData, airlinesData]);

  

//   React.useEffect(() => {
//     if (markersData.length > 0) {
//         console.log(markersData)
//     }
//   }, [markersData]);


  // const handlesetMarkers = () => {
  //   const markers = airportsData.map(airport => ({
  //       markerOffset: 0,
  //       code: airport.IATA_CODE,
  //       city: airport.CITY,
  //       coordinates: [airport.LONGITUDE, airport.LATITUDE],
  //     }))
      
  //   setMarkersData(markers)
    
  // }
//   setMarkersData(markers);

  return (
    <div style={{ height: "100%", width: "fit-content", margin: "0 auto" }}>
      <ComposableMap
        style={{ width: "auto", height: "100%" }}
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

              {markersData.map(
                  ({ markerOffset, code, city, coordinates }) => {
                    return (
                      <Tooltip title={city} placement="top">
                        <Marker
                          key={code}
                          coordinates={coordinates}
                          data-tip={code}
                          data-for={`tooltip-${code}`}
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
      
    </div>
  );
};

export default UsAirportMap;
