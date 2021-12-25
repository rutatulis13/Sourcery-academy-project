import React from "react";
import PropTypes from "prop-types";
import "./MasonryLayout.scss";

const MasonryLayout = ({ children }) => {
  return <div className="mansonry-layout">{children}</div>;
};

const MasonryItem = ({ children, span = 1 }) => {
  return (
    <div
      style={{
        gridRowEnd: `span ${span}`,
      }}
    >
      {children}
    </div>
  );
};

MasonryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

MasonryItem.propTypes = {
  children: PropTypes.node.isRequired,
  span: PropTypes.number,
};

export default MasonryLayout;
export { MasonryItem };
