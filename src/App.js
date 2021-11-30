import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Dashboard from "pages/Dashboard/Dashboard";
import BookReservations from "pages/BookReservations/BookReservations";
import EatOutPage from "pages/EatOutPage/EatOutPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reservations" element={<BookReservations />} />
          <Route path="/eat-out" element={<EatOutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
