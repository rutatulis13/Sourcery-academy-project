import React from "react";
import PropTypes from "prop-types";
import "../Form/Form.scss";

const FormAction = (props) => {
  return (
    <div className="form__row" {...props}>
      {props.children}
    </div>
  );
};

FormAction.propTypes = {
  children: PropTypes.any,
};

export default FormAction;
