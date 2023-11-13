import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Airlines from "./components/Airlines/Airlines";
import Airports from "./components/Airports/Airports";
import Flights from "./components/Flights/Flights";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route exact path="/airports" element={<Airlines />} />
            <Route exact path="/airlines" element={<Airports />} />
            <Route exact path="/flights" element={<Flights />} />
            <Route exact path="/navbar" element={<Navbar />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
