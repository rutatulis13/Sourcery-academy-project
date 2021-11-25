import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import FormRow from "../FormRow/FormRow";
import "../Form/Form.scss";
import "../../AuthorizationLayout/AuthorizationLayout.scss";

const FormAction = (props) => {
  return (
    <FormRow>
      <div className="form__col-33 text-left register-btn-col">
        <Button type={props.type}>{props.button_name}</Button>
      </div>
      <div className="form__col-66 text-right register-sign-in-col">
        <p className="authorization-layout__subtitle">
          {props.words_before_link} &nbsp;
          <Link to={props.to}>{props.link_name}</Link>
        </p>
      </div>
    </FormRow>
  );
};

FormAction.propTypes = {
  type: PropTypes.string,
  to: PropTypes.any,
  button_name: PropTypes.string,
  words_before_link: PropTypes.string,
  link_name: PropTypes.string,
  children: PropTypes.any,
};

export default FormAction;
