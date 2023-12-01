import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Airlines from "./components/Airlines/Airlines";
import Airports from "./components/Airports/Airports";
import Flights from "./components/Flights/Flights";
import Navbar from "./components/Navbar/Navbar";
import { DataProvider } from "./context/DataContext";


function App() {


  return (
    <DataProvider>
      <div className="App">
        <Router>
          <div>
            <Navbar />

            <Routes>
              <Route path="/" element={<Navigate to="/airlines" />} />
              <Route path="/index.js" element={<Navigate to="/airlines" />} />
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
