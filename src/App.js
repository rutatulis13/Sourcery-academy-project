import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Dashboard from "pages/Dashboard/Dashboard";
import BookReservations from "pages/BookReservations/BookReservations";
import EatOutPage from "pages/EatOutPage/EatOutPage";
import Reservations from "pages/Reservations/Reservations";
import DeviceReservations from "pages/DeviceReservations/DeviceReservations";
import NotFound from "pages/NotFound/NotFound";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import { UserProvider } from "components/UserContext/UserContext";
import { AuthContext } from "components/AuthContext/AuthContext";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn && (
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
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Route>
          </Route>
        )}
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
