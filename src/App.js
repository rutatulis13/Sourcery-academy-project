import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Dashboard from "pages/Dashboard/Dashboard";
import BookReservations from "pages/BookReservations/BookReservations";
import EatOutPage from "pages/EatOutPage/EatOutPage";
import EatOutCategoryPage from "pages/EatOutCategoryPage/EatOutCategoryPage";
import Reservations from "pages/Reservations/Reservations";
import DeviceReservations from "pages/DeviceReservations/DeviceReservations";
import NotFound from "pages/NotFound/NotFound";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import { UserProvider } from "components/UserContext/UserContext";
import EatOutRestaurantPage from "pages/EatOutRestaurantPage/EatOutRestaurantPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserProvider />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/reservations"
              element={<Navigate replace to="/reservations/books" />}
            />
            <Route path="/reservations" element={<Reservations />}>
              <Route path="books" element={<BookReservations />} />
              <Route path="devices" element={<DeviceReservations />} />
            </Route>
            <Route path="/eat-out" element={<EatOutPage />} />
            <Route
              path="/eat-out/restaurant/:restaurantId"
              element={<EatOutRestaurantPage />}
            />
            <Route
              path="/eat-out/:categoryName"
              element={<EatOutCategoryPage />}
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
