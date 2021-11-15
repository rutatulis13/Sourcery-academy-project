import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../pages/Dashboard";
import BookReservations from "../../pages/BookReservations";
import EatOutPage from "../../pages/EatOutPage";

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="header">
        <BrowserRouter>
          <div>
            <Navigation />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Reservations" element={<BookReservations />} />
              <Route path="/EatOut" element={<EatOutPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </header>
      <div className="container">
        <div className="container__content">{props.children}</div>
      </div>
      <footer className="footer">
        <div className="footer__copyright">COPYRIGHT &copy; 2021 DEVBRIDGE</div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
