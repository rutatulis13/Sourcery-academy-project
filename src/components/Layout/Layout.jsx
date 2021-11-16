import React from "react";
import PropTypes from "prop-types";
import "./Layout.scss";
import TopBar from "../../components/TopBar/TopBar.jsx";

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="header">
        <TopBar />
      </header>
      <div className="container">
        <div className="container__content">{props.children}</div>
      </div>
      <footer className="footer">
        <div className="footer__copyright">
          COPYRIGHT &copy; {new Date().getFullYear()} DEVBRIDGE
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
