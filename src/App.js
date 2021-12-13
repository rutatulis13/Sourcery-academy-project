import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Dashboard from "pages/Dashboard/Dashboard";
import Reservations from "pages/Reservations/Reservations";
import BookReservations from "pages/BookReservations/BookReservations";
import DeviceReservations from "pages/DeviceReservations/DeviceReservations";
import EatOutPage from "pages/EatOutPage/EatOutPage";
import EatOutCategoryPage from "pages/EatOutCategoryPage/EatOutCategoryPage";
import EatOutRestaurantPage from "pages/EatOutRestaurantPage/EatOutRestaurantPage";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import { AuthContext } from "components/AuthContext/AuthContext";
import NotFound from "pages/NotFound/NotFound";
import { UserProvider } from "contexts/UserContext/UserContext";
import { RestaurantsProvider } from "contexts/RestaurantsContext/RestaurantsContext";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn && (
          <Route element={<UserProvider />}>
            <Route element={<Layout />}>
              <Route element={<RestaurantsProvider />}>
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
