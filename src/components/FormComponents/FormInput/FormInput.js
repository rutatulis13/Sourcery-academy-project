import React from "react";
import PropTypes from "prop-types";
import "../Form.scss";

const FormInput = (props) => {
  return <input className="form__input" {...props} />;
};

FormInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.any,
  type: PropTypes.any,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};

export default FormInput;
