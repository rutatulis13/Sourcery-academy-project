import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import classNames from "classnames/bind";

const Button = ({ size, children, ...restProps }) => {
  const buttonClass = classNames("button", {
    "button--medium": size === "medium",
  });
  return (
    <button className={buttonClass} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["medium", "large"]),
};

Button.defaultProps = {
  size: "large",
};

export default Button;
