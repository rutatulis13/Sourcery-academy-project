import React from "react";
import PropTypes from "prop-types";
import "./Grid.scss";

const Grid = ({ children, breakpointCols }) => {
  return (
    <div
      className={`
        grid
        grid--mobile-${breakpointCols[0]}
        grid--tablet-${breakpointCols[1]}
        grid--laptop-${breakpointCols[2]}
        grid--desktop-${breakpointCols[3]}
      `}
      // style={{gridTemplateColumns: `repeat(auto-fill, minmax(min(${props.colWidth}, 100%), 1fr))`,}}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  breakpointCols: ({ breakpointCols: prop }, propName, componentName) => {
    if (
      !Array.isArray(prop) ||
      prop.length !== 4 ||
      !prop.every(Number.isInteger)
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. It should be be an array of 4 numbers.`
      );
    }
  },
  children: PropTypes.node,
  //colWidth: PropTypes.string,
};

Grid.defaultProps = {
  breakpointCols: [1, 2, 3, 4],
};

export default Grid;
