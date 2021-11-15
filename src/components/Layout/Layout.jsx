import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";
// import TopBar from "../../components/TopBar/TopBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "components/pages/Dashboard";
import Reservations from "components/pages/Reservations";
import Eat from "components/pages/Eat";

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="header">
        {/* <TopBar /> */}
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
