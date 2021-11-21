import React from "react";
import PropTypes from "prop-types";
import "./LoginButton.scss";

const LoginButton = (props) => {
  return (
    <button className="login-button" {...props}>
      {props.children}
    </button>
  );
};

LoginButton.propTypes = {
  className: PropTypes.any,
  type: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default LoginButton;
