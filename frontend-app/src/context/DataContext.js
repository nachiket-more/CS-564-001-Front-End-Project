import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [airlinesData, setAirlinesData] = useState(null);
  const [flightsData, setFlightsData] = useState(null);

  const [airportsData, setAirportsData] = useState(null);
  useEffect(() => {
    // Fetch data from your API here
    const fetchAirlineData = async () => {
      axios
        .get("http://localhost:5050/airlines/all", {
          headers: {
            "API-Key": process.env.REACT_APP_API_KEY,
          },
        })
        .then((response) => {
          setAirlinesData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching airlines data:", error);
        });
    };

    const fetchFlightData = async () => {
      axios
        .get("http://localhost:5050/flights/all", {
          headers: {
            "API-Key": process.env.REACT_APP_API_KEY,
          },
        })
        .then((response) => {
          setFlightsData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching flights data:", error);
        });
    };

    
    const fetchAirportData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/airports/all', {
          headers: {
            "API-Key": process.env.REACT_APP_API_KEY,
          },
        });
    
        setAirportsData(response.data);
      } catch (error) {
        console.error('Error fetching airports data:', error);
      }
    };

    fetchAirlineData();
    fetchFlightData();
    fetchAirportData();
  }, []);

  return (
    <DataContext.Provider value={{ airlinesData, airportsData, flightsData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
