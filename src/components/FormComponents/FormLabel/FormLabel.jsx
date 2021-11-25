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
  children: PropTypes.any,
};

export default FormLabel;
