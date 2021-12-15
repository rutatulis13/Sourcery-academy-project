import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import classNames from "classnames/bind";

const Button = (props) => {
  const buttonClass = classNames("button", { "button--medium": props.medium });
  const _props = { ...props };
  delete _props.medium;
  return (
    <button className={buttonClass} {..._props}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  medium: PropTypes.bool,
};

export default Button;
