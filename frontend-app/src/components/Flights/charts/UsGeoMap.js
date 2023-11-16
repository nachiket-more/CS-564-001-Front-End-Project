import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  { markerOffset: 25, airport: "Lehigh Valley International Airport", city: "Allentown", coordinates: [-75.4404, 40.65236] },
  { markerOffset: 25, airport: "McClellan-Palomar Airport", city: "San Diego", coordinates: [-117.27873, 33.12723] },
  { markerOffset: 25, airport: "Abilene Regional Airport", city: "Abilene", coordinates: [-99.6819, 32.41132] },
];

const routes = [
  { dep: "Allentown", arr: "San Diego" },
  { dep: "Allentown", arr: "Abilene" },
];

const UsGeoMap = () => {
  // const [lineColors, setLineColors] = useState({
  //   "Allentown-San Diego": "#D499B9",
  //   "Allentown-Abilene": "#D499B9",
  // });

  // const handleButtonClick = () => {
  //   // Change the color of the line between Allentown and Abilene to blue
  //   setLineColors((prevColors) => ({
  //     ...prevColors,
  //     "Allentown-Abilene": "#0000FF", // Change to your desired color
  //   }));
  // };

  // React.useEffect(()=>{
  //   console.log(lineColors)
  // },[lineColors])

  return (
    <div>
      {/* <button onClick={handleButtonClick}>Change Line Color</button> */}
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#9055A2"
                  geography={geo}
                  fill="#efefef"
                />
              ))}
              {routes.map(({ dep, arr }) => {
                const depMarker = markers.find((marker) => marker.city === dep);
                const arrMarker = markers.find((marker) => marker.city === arr);

                if (depMarker && arrMarker) {
                  const key = `${dep}-${arr}`;
                  return (
                    <Line
                      key={key}
                      from={depMarker.coordinates}
                      to={arrMarker.coordinates}
                      stroke="#9055A2"
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                  );
                }

                return null;
              })}
              {markers.map(({ airport, city, coordinates, markerOffset }) => (
                <Marker key={city} coordinates={coordinates}>
                  <circle r={5} fill="#011638" stroke="#011638" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{
                      fontFamily: "Montserrat",
                      fill: "#011638",
                      fontWeight: 600,
                    }}
                  >
                    {city}
                  </text>
                </Marker>
              ))}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default UsGeoMap;
