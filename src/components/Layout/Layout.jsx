import React from "react";
import PropTypes from "prop-types";
import TopBar from "components/TopBar/TopBar";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div className="layout">
      <TopBar />
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
