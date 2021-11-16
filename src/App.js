import React from "react";
import { Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Dashboard from "pages/Dashboard";
import BookReservations from "pages/BookReservations";
import EatOutPage from "pages/EatOutPage";

function App() {
  return (
    <Layout>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Reservations" element={<BookReservations />} />
      <Route path="/EatOut" element={<EatOutPage />} />
    </Layout>
  );
}

export default App;
