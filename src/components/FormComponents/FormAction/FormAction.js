import React from "react";
import PropTypes from "prop-types";
import "./FormAction.scss";

const FormAction = (props) => {
  return (
    <div className="form-action" {...props}>
      {props.children}
    </div>
  );
};

FormAction.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
};

export default FormAction;
