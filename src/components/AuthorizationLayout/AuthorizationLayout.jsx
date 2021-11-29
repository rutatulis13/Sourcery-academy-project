import React from "react";
import PropTypes from "prop-types";
import FormLogo from "../FormComponents/FormLogo/FormLogo";
import "./AuthorizationLayout.scss";

const AuthorizationLayout = ({ children, title, subtitle }) => {
  return (
    <div>
      <FormLogo />
      <div className="authorization-layout">
        <div className="authorization-layout__header">
          <h2 className="authorization-layout__title">{title}</h2>
          <div className="authorization-layout__subtitle">{subtitle}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

AuthorizationLayout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.any,
};

export default AuthorizationLayout;
