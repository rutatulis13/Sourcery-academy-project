import React from "react";
import "./Layout.scss";
import TopBar from "../../components/TopBar/TopBar.jsx";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";

const Layout = () => {
  return (
    <div className="layout">
      <header className="layout__header">
        <TopBar />
        <Breadcrumbs />
      </header>
      <div className="layout__container">Container</div>
      <footer className="layout__footer">
        <div className="layout__footer__copyright">
          COPYRIGHT &copy; 2021 DEVBRIDGE
        </div>
      </footer>
    </div>
  );
};

export default Layout;
