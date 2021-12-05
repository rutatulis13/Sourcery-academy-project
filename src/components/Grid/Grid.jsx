import React from "react";
import PropTypes from "prop-types";
import "./Grid.scss";

const Grid = ({ children, breakpointCols }) => {
  return (
    <div
      className={`
        grid
        grid--mobile-${breakpointCols[0]}
        grid--tablet-s-${breakpointCols[1]}
        grid--tablet-l-${breakpointCols[2]}
        grid--laptop-${breakpointCols[3]}
        grid--desktop-${breakpointCols[4]}
      `}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  breakpointCols: ({ breakpointCols: prop }, propName, componentName) => {
    if (
      !Array.isArray(prop) ||
      prop.length !== 5 ||
      !prop.every(Number.isInteger)
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. It should be be an array of 4 numbers.`
      );
    }
  },
  children: PropTypes.node,
};

Grid.defaultProps = {
  breakpointCols: [1, 2, 3, 4, 6],
};

export default Grid;
