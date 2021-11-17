import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  return (
    <div className="error-message text-left" {...props}>
      {props.children}
    </div>
  );
};

ErrorMessage.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
};

export default ErrorMessage;
