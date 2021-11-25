import React from "react";
import PropTypes from "prop-types";
import FormLabel from "../FormLabel/FormLabel";
import "../Form/Form.scss";

const FormInput = (props) => {
  return (
    <div className={"form__col-" + props.column_width}>
      <FormLabel>
        {props.label}
        <input
          className={props.className}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
        {props.children}
      </FormLabel>
    </div>
  );
};

FormInput.propTypes = {
  column_width: PropTypes.string,
  className: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.any,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.any,
  label: PropTypes.string,
};

export default FormInput;
