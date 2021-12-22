import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
