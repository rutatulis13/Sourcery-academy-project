import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FormLabel from "../FormLabel/FormLabel";
import InputDelete from "../InputDelete/InputDelete";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import "../Form/Form.scss";

const FormInput = (props) => {
  const { error } = props;

  const inputClass = classNames({
    form__input: true,
    "form__input--invalid": !!error,
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
        {error ? (
          <>
            <InputDelete onClick={() => props.onClick(props.name)} />
            <ErrorMessage>{error}</ErrorMessage>
          </>
        ) : null}
        {props.children}
      </FormLabel>
    </div>
  );
};

FormInput.propTypes = {
  width: PropTypes.oneOf(["33", "50", "66", "100"]),
  error: PropTypes.string,
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
