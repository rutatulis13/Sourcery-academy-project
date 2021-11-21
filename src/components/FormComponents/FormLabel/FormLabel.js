import React from "react";
import PropTypes from "prop-types";
import "./FormLabel.scss";

const FormLabel = (props) => {
  return (
    <label className="form-label" {...props}>
      {props.children}
    </label>
  );
};

FormLabel.propTypes = {
  className: PropTypes.any,
  children: PropTypes.any,
  htmlFor: PropTypes.string,
};

export default FormLabel;
