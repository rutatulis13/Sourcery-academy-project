import React from "react";
import "./PageLayout.scss";
import PropTypes from "prop-types";

const PageLayout = ({ title, children }) => {
  return (
    <main className="page-layout">
      <h1 className="page-layout__title">{title}</h1>
      {children}
    </main>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageLayout;
