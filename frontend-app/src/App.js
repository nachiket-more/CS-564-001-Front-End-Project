import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Airlines from "./components/Airlines/Airlines";
import Airports from "./components/Airports/Airports";
import Flights from "./components/Flights/Flights";
import Navbar from "./components/Navbar/Navbar";
import { DataProvider } from './context/DataContext';


import { useDispatch } from 'react-redux';
import { fetchAirlinesData } from './redux/actions/airlineAction';
import { fetchFlightsData } from './redux/actions/flightsAction';

function App() {
  const dispatch = useDispatch();



  React.useEffect(() => {
    // Fetch airlines and flights data when the component mounts
    dispatch(fetchAirlinesData());
    dispatch(fetchFlightsData());
  }, [dispatch]);


  return (
    <DataProvider>
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route exact path="/airports" element={<Airports />} />
            <Route exact path="/airlines" element={<Airlines />} />
            <Route exact path="/flights" element={<Flights />} />
            <Route exact path="/navbar" element={<Navbar />} />
          </Routes>
        </div>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
