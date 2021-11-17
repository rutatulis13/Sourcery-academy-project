import React from "react";
import PropTypes from "prop-types";
import Logo from "../../../assets/logo.svg";
import "./FormWrapper.scss";

const FormWrapper = ({ children, title, subtitle }) => {
  return (
    <div className="">
      <img className="logo" src={Logo} alt="" />
      <div className="login-wrapper">
        <div className="login-wrapper__header">
          <h2 className="login-wrapper__title">{title}</h2>
          <div className="login-wrapper__subtitle">{subtitle}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

FormWrapper.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
};

export default FormWrapper;
