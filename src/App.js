import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Dashboard from "pages/Dashboard";
import BookReservations from "pages/BookReservations";
import EatOutPage from "pages/EatOutPage";
// import Registration from "pages/login/Register";
// import Login from "pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reservations" element={<BookReservations />} />
          <Route path="/eat-out" element={<EatOutPage />} />
          {/* <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
