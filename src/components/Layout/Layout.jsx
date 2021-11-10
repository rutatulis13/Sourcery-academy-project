import React from "react";
import "./Layout.scss";
import TopBar from "../../components/TopBar/TopBar.jsx";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <TopBar />
      </header>
      <div className="container">
        <div className="container__content">Container</div>
      </div>
      <footer className="footer">
        <div className="footer__copyright">COPYRIGHT &copy; 2021 DEVBRIDGE</div>
      </footer>
    </div>
  );
};

export default Layout;
