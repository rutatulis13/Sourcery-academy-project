import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import "./register.scss";
import PropTypes from "prop-types";

const Registration = (props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInput = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handleLastNameInput = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handleEmailInput = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleRepeatPasswordInput = (e) => {
    setValues({ ...values, repeatPassword: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password &&
      values.repeatPassword
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="register-page">
      <img className="logo" src={Logo} alt="" />
      <div className="login-wrapper">
        <div className="login-wrapper__header">
          <h2 className="login-wrapper__title">Register</h2>
          <div className="login-wrapper__subtitle">
            {"Let's get you on board."}
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          {submitted && valid ? <Navigate to="/login" /> : null}
          <div className="form__row">
            <div className="form__col-5">
              <label htmlFor="first-name" className="form__label">
                FIRST NAME
                <input
                  onChange={handleFirstNameInput}
                  value={values.firstName}
                  id="first-name"
                  className="form__input"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                />
              </label>
              {submitted && !values.firstName ? (
                <div className="first-name-error">
                  Please enter a first name
                </div>
              ) : null}
            </div>
            <div className="form__col-5">
              <label htmlFor="last-name" className="form__label">
                LAST NAME
                <input
                  onChange={handleLastNameInput}
                  value={values.lastName}
                  id="last-name"
                  className="form__input"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                />
              </label>
              {submitted && !values.lastName ? (
                <div className="last-name-error">Please enter a last name</div>
              ) : null}
            </div>
          </div>
          <div className="form__row">
            <div className="form__col-10">
              <label htmlFor="email" className="form__label">
                EMAIL
                <input
                  onChange={handleEmailInput}
                  value={values.email}
                  id="email"
                  className="form__input"
                  type="text"
                  placeholder="Email"
                  name="email"
                />
              </label>
              {submitted && !values.email ? (
                <div className="email-error">Please enter a email</div>
              ) : null}
            </div>
          </div>
          <div className="form__row">
            <div className="form__col-5">
              <label htmlFor="password" className="form__label">
                PASSWORD
                <input
                  onChange={handlePasswordInput}
                  value={values.password}
                  id="password"
                  className="form__input"
                  type="text"
                  placeholder="Password"
                  name="password"
                />
              </label>
              {submitted && !values.password ? (
                <div className="form-error">Please enter a password</div>
              ) : null}
            </div>
            <div className="form__col-5">
              <label htmlFor="repeat-password" className="form__label">
                REPEAT PASSWORD
                <input
                  onChange={handleRepeatPasswordInput}
                  value={values.repeatPassword}
                  id="repeat-password"
                  className="form__input"
                  type="text"
                  placeholder="Repeat Password"
                  name="repeatPassword"
                />
              </label>
              {submitted && !values.repeatPassword ? (
                <div className="repeat-password-error">
                  Please repeat password
                </div>
              ) : null}
            </div>
          </div>
          <div className="form__action">
            <div className="form__col-33 text-left register-btn-col">
              <button
                className="form__submit"
                type="submit"
                onClick="handleSubmit"
              >
                Register
              </button>
            </div>
            <div className="form__col-66 text-right register-sign-in-col">
              <p className="login-wrapper__subtitle">
                Already have an account? &nbsp;
                <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Registration.propTypes = {
  openLoginCallBack: PropTypes.func,
};

export default Registration;
