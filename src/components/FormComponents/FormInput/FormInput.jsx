import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FormLabel from "../FormLabel/FormLabel";
import InputDelete from "../InputDelete/InputDelete";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "../Form/Form.scss";

const FormInput = (props) => {
  const { invalid } = props;

  const inputClass = classNames({
    form__input: true,
    "form__input--invalid": !invalid,
  });

  return (
    <div className={"form__col-" + props.width}>
      <FormLabel>
        {props.label}
        <input
          className={inputClass}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
        {!invalid ? (
          <>
            <InputDelete onClick={() => props.onClick(props.name)} />
            <ErrorMessage>Please enter {props.placeholder}</ErrorMessage>
          </>
        ) : null}
        {props.children}
      </FormLabel>
    </div>
  );
};

FormInput.propTypes = {
  width: PropTypes.oneOf(["33", "50", "66", "100"]),
  invalid: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
};

export default FormInput;
