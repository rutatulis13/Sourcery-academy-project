import React from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/Navigation/Navigation";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="header">
        <Navigation />
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
