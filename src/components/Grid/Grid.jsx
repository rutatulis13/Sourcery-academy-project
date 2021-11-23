import React from "react";
import PropTypes from "prop-types";
import "./Grid.scss";

const Grid = (props) => {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(min(${props.colWidth}, 100%), 1fr))`,
      }}
    >
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
  colWidth: PropTypes.string.isRequired,
};

export default Grid;
