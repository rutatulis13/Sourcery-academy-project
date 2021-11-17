import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button.js";
import "../Form.scss";

const FormAction = ({ title, children }) => {
  return (
    <div className="form__action">
      <div className="form__col-33 text-left register-btn-col">
        <Button className="form__submit" type="submit">
          {title}
        </Button>
      </div>
      <div className="form__col-66 text-right register-sign-in-col">
        <p className="login-wrapper__subtitle">{children}</p>
      </div>
    </div>
  );
};

FormAction.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
};

export default FormAction;
