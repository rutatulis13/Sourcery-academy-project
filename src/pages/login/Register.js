import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Form from "../../components/FormComponents/Form/Form.js";
import FormLabel from "../../components/FormComponents/FormLabel/FormLabel.js";
import FormInput from "../../components/FormComponents/FormInput/FormInput.js";
import FormAction from "../../components/FormComponents/FormAction/FormAction.js";
import FormWrapper from "../../components/FormComponents/FormWrapper/FormWrapper.js";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.js";
import "../../components/FormComponents/Register.scss";
import "../../components/FormComponents/Form.scss";

const Registration = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
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
    <FormWrapper title="Register" subtitle="Let's get you on board.">
      <Form onSubmit={handleSubmit}>
        {submitted && valid ? <Navigate to="/login" /> : null}
        <div className="form__row">
          <div className="form__col-50">
            <FormLabel htmlFor="first-name">
              FIRST NAME
              <FormInput
                onChange={handleChange}
                value={values.firstName}
                id="first-name"
                type="text"
                placeholder="First Name"
                name="firstName"
              />
              {submitted && !values.firstName ? (
                <ErrorMessage>Please enter a first name</ErrorMessage>
              ) : null}
            </FormLabel>
          </div>
          <div className="form__col-50">
            <FormLabel htmlFor="last-name">
              LAST NAME
              <FormInput
                onChange={handleChange}
                value={values.lastName}
                id="last-name"
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
              {submitted && !values.lastName ? (
                <ErrorMessage>Please enter a last name</ErrorMessage>
              ) : null}
            </FormLabel>
          </div>
        </div>
        <div className="form__row">
          <div className="form__col-100">
            <FormLabel htmlFor="email">
              EMAIL
              <FormInput
                onChange={handleChange}
                value={values.email}
                id="email"
                type="email"
                placeholder="Email"
                name="email"
              />
              {submitted && !values.email ? (
                <ErrorMessage>Please enter an email</ErrorMessage>
              ) : null}
            </FormLabel>
          </div>
        </div>
        <div className="form__row">
          <div className="form__col-50">
            <FormLabel htmlFor="password">
              PASSWORD
              <FormInput
                onChange={handleChange}
                value={values.password}
                id="password"
                type="password"
                placeholder="Password"
                name="password"
              />
              {submitted && !values.password ? (
                <ErrorMessage>Please enter a password</ErrorMessage>
              ) : null}
            </FormLabel>
          </div>
          <div className="form__col-50">
            <FormLabel htmlFor="repeat-password">
              REPEAT PASSWORD
              <FormInput
                onChange={handleChange}
                value={values.repeatPassword}
                id="repeat-password"
                type="password"
                placeholder="Repeat Password"
                name="repeatPassword"
              />
              {submitted && !values.repeatPassword ? (
                <ErrorMessage>Please repeat a password</ErrorMessage>
              ) : null}
            </FormLabel>
          </div>
        </div>
        <FormAction title="Register">
          Already have an account? &nbsp;
          <Link to="/login">Sign in</Link>
        </FormAction>
      </Form>
    </FormWrapper>
  );
};

export default Registration;
