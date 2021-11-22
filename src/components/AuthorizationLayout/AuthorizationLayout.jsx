import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/logo.svg";
import "./AuthorizationLayout.scss";

const AuthorizationLayout = ({ children, title, subtitle }) => {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
      <div className="authorization-layout">
        <div className="authorization-layout__header">
          <h2 className="authorization-layout_title">{title}</h2>
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
  children: PropTypes.any,
  className: PropTypes.any,
};

export default AuthorizationLayout;
