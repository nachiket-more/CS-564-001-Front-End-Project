import React, { useState, useContext, useEffect } from 'react';
import './Flights.css';
import UsGeoMap from './charts/UsFlightMap';
import Dropdown from 'react-bootstrap/Dropdown';

import { DataContext } from '../../context/DataContext';

const Flights = () => {
  // Context for accessing shared data
  const data = useContext(DataContext);

  // States for holding data
  const [airlinesData, setAirlinesData] = useState(null);
  const [, setFlightsData] = useState(null);
  const [, setAirportsData] = useState(null);
  const [key, setKey] = useState(0);
  const [selectedAirline, setSelectedAirline] = useState(
    'United Air Lines Inc.'
  );
  const [selectedOrigin, setSelectedOrigin] = useState('select city');
  const [totalAirlines] = useState(13);
  const [totalFlights, setTotalFlights] = useState(null);
  const [totalOrigins, setTotalOrigins] = useState(null);
  const [totalDest, setTotalDest] = useState(null);
  const [flightOrigins, setFlightOrigins] = useState({});

  // Effect to set data when it becomes available
  useEffect(() => {
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

  // Handler for selecting origin
  const handleSelectedOrigin = (selectedItem) => {
    setSelectedOrigin(selectedItem);
  };

  // Effect to update key when selected origin changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [selectedOrigin]);

  // Handler for selecting airline
  const handleSelectedAirline = (selectedItem) => {
    setSelectedAirline(selectedItem);
    setSelectedOrigin('select city');
  };

  // Effect to update key when selected airline changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [selectedAirline]);

  // Handler for updating flight values
  const handleFlightValues = (data) => {
    setTotalFlights(data.total_flights);
    setTotalOrigins(data.total_origins);
    setTotalDest(data.total_dest);
  };

  // Handler for updating flight origins
  const handleFlightOrigins = (data) => {
    setFlightOrigins(data);
  };

  return (
    <div>
      {airlinesData != null && (
        <div className='page-container flights-container'>
          <div className='top'>
            {flightCards('Total Airlines', totalAirlines, 'total-airlines')}
            {flightCards('Total Flights', totalFlights, 'total-flights')}
            {flightCards('No. of Origin', totalOrigins, 'total-origin')}
            {flightCards('No. of Dest', totalDest, 'total-dest')}
          </div>

          <div className='bottom'>
            <div className='card-container usmap-card'>
              <div>
                {<div className='card-title'>Flights Distribution</div>}
                <div
                  style={{
                    display: 'flex',
                    columnGap: '10px',
                  }}
                >
                  {/* Dropdown for selecting airline */}
                  <Dropdown onSelect={handleSelectedAirline}>
                    <Dropdown.Toggle
                      className='btn-primary'
                      id='dropdown-basic'
                    >
                      {selectedAirline}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {[
                        ...new Set(
                          airlinesData.map((flight) => flight.AIRLINE)
                        ),
                      ].map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item} href=''>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Dropdown for selecting origin */}
                  <Dropdown onSelect={handleSelectedOrigin}>
                    <Dropdown.Toggle
                      className='btn-primary'
                      id='dropdown-basic'
                    >
                      Origin: {selectedOrigin}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {Array.from(flightOrigins).map((item, index) => (
                        <Dropdown.Item key={index} eventKey={item} href=''>
                          {item}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className='usmap-flights'>
                <UsGeoMap
                  key={key}
                  selectedAirline={selectedAirline}
                  selectedOrigin={selectedOrigin}
                  flightValues={handleFlightValues}
                  flightOriginsData={handleFlightOrigins}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Function to generate flight cards
const flightCards = (title, value, id) => {
  return (
    <div className='card-container airlines-card' id={id}>
      <div className='card-title'>{title}</div>
      <div className='flights-values'>{value}</div>
    </div>
  );
};

export default Flights;
