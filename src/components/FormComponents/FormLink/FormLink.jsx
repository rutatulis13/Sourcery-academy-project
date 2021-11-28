import React from "react";
import PropTypes from "prop-types";
import "./FormLink.scss";

const FormLink = (props) => {
  return (
    <p className="form-link" {...props}>
      {props.children}
    </p>
  );
};

FormLink.propTypes = {
  children: PropTypes.node,
};

export default FormLink;
