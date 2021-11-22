import React from "react";
import PropTypes from "prop-types";
import "../Form/Form.scss";

const FormRow = (props) => {
  return <div className="form__row">{props.children}</div>;
};

FormRow.propTypes = {
  children: PropTypes.any,
};

export default FormRow;
