import React from "react";
import PropTypes from "prop-types";
import "./MasonryLayout.scss";

const MasonryLayout = ({ children }) => {
  return <div className="mansonry-layout">{children}</div>;
};

MasonryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MasonryLayout;
