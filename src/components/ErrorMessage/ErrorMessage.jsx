import React from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.scss";

const ErrorMessage = (props) => {
  return (
    <div className="error-message text-left" {...props}>
      {props.children}
    </div>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node,
};

export default ErrorMessage;
