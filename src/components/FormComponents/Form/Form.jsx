import React from "react";
import PropTypes from "prop-types";
import "./Form.scss";

const Form = (props) => {
  return (
    <form className="form" {...props}>
      {props.children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
};

export default Form;
