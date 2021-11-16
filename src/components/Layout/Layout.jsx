import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";
import { BrowserRouter, Routes } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import PageLayout from "components/PageLayout/PageLayout";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <BrowserRouter>
          <div>
            <Navigation />
            <Routes>{children}</Routes>
          </div>
        </BrowserRouter>
      </header>
      <PageLayout />
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
