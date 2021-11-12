import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "components/pages/Dashboard";
import Reservations from "components/pages/Reservations";
import Eat from "components/pages/Eat";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Reservations" element={<Reservations />} />
            <Route path="/EatOut" element={<Eat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
