import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return <button {...props}>{props.children}</button>;
};

Button.propTypes = {
  className: PropTypes.any,
  type: PropTypes.string,
  children: PropTypes.any,
  onSubmit: PropTypes.func,
};

export default Button;
