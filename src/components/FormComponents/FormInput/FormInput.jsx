import React from "react";
import PropTypes from "prop-types";
import "../Form/Form.scss";

const FormInput = (props) => {
  return (
    <div className={"form__col-" + props.columnWidth}>{props.children}</div>
  );
};

FormInput.propTypes = {
  columnWidth: PropTypes.string,
  children: PropTypes.any,
};

export default FormInput;
