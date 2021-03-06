import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import FormRow from "../FormRow/FormRow";
import FormLink from "../FormLink/FormLink";
import "../Form/Form.scss";

const FormAction = (props) => {
  return (
    <FormRow>
      <div className="form__col-33">
        <Button type={props.type} disabled={props.isDisabled}>
          {props.buttonName}
        </Button>
      </div>
      <div className="form__col-66">
        <FormLink>
          {props.question} &nbsp;
          <Link to={props.to}>{props.linkName}</Link>
        </FormLink>
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
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
};

export default FormAction;
