import React from "react";
import { Outlet } from "react-router";
import TopBar from "components/TopBar/TopBar";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <TopBar />
      <div className="container">
        <div className="container__content">
          <Outlet />
        </div>
      </div>
      <footer className="footer">
        <div className="footer__copyright">
          COPYRIGHT &copy; {new Date().getFullYear()} DEVBRIDGE
        </div>
      </footer>
    </div>
  );
};

export default Layout;
