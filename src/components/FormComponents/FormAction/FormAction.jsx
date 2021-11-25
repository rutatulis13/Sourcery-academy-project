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
      <div className="form__col-33">
        <Button type={props.type}>{props.buttonName}</Button>
      </div>
      <div className="form__col-66">
        <p className="authorization-layout__subtitle">
          {props.question} &nbsp;
          <Link to={props.to}>{props.linkName}</Link>
        </p>
      </div>
    </FormRow>
  );
};

FormAction.propTypes = {
  type: PropTypes.string,
  to: PropTypes.any,
  buttonName: PropTypes.string,
  question: PropTypes.string,
  linkName: PropTypes.string,
  children: PropTypes.any,
};

export default FormAction;
