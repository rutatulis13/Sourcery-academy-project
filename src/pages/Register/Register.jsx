import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Form from "../../components/FormComponents/Form/Form";
import FormLabel from "../../components/FormComponents/FormLabel/FormLabel";
import FormAction from "../../components/FormComponents/FormAction/FormAction";
import FormRow from "../../components/FormComponents/FormRow/FormRow";
import FormInput from "../../components/FormComponents/FormInput/FormInput";
import InputDelete from "../../components/FormComponents/InputDelete/InputDelete";
import AuthorizationLayout from "../../components/AuthorizationLayout/AuthorizationLayout";
import Button from "../../components/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "../../components/FormComponents/Form/Form.scss";
import "./Register.scss";

const Register = () => {
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
      values.firstName.length > 2 &&
      values.lastName.length > 2 &&
      values.email.length > 2 &&
      values.password.length > 2 &&
      values.repeatPassword.length > 2
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <AuthorizationLayout title="Register" subtitle="Let's get you on board.">
      <Form onSubmit={handleSubmit}>
        {submitted && valid ? <Navigate to="/login" /> : null}
        <FormRow>
          <FormInput columnWidth="50">
            <FormLabel htmlFor="first-name">
              FIRST NAME
              <input
                className={
                  submitted && values.firstName.length < 3
                    ? "form__input__invalid"
                    : "form__input"
                }
                onChange={handleChange}
                value={values.firstName}
                id="first-name"
                type="text"
                placeholder="First Name"
                name="firstName"
              />
              {submitted && values.firstName.length < 3 ? (
                <>
                  <InputDelete
                    onClick={() => setValues({ ...values, firstName: "" })}
                  />
                  <ErrorMessage>Please enter a first name</ErrorMessage>
                </>
              ) : null}
            </FormLabel>
          </FormInput>
          <FormInput columnWidth="50">
            <FormLabel htmlFor="last-name">
              LAST NAME
              <input
                className={
                  submitted && values.lastName.length < 3
                    ? "form__input__invalid"
                    : "form__input"
                }
                onChange={handleChange}
                value={values.lastName}
                id="last-name"
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
              {submitted && values.lastName.length < 3 ? (
                <>
                  <InputDelete
                    onClick={() => setValues({ ...values, lastName: "" })}
                  />
                  <ErrorMessage>Please enter a last name name</ErrorMessage>
                </>
              ) : null}
            </FormLabel>
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput columnWidth="100">
            <FormLabel htmlFor="email">
              EMAIL
              <input
                className={
                  submitted && values.email.length < 3
                    ? "form__input__invalid"
                    : "form__input"
                }
                onChange={handleChange}
                value={values.email}
                id="email"
                type="text"
                placeholder="Email"
                name="email"
              />
              {submitted && values.email.length < 3 ? (
                <>
                  <InputDelete
                    onClick={() => setValues({ ...values, email: "" })}
                  />
                  <ErrorMessage>Please enter an email</ErrorMessage>
                </>
              ) : null}
            </FormLabel>
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput columnWidth="50">
            <FormLabel htmlFor="password">
              PASSWORD
              <input
                className={
                  submitted && values.password.length < 3
                    ? "form__input__invalid"
                    : "form__input"
                }
                onChange={handleChange}
                value={values.password}
                id="password"
                type="password"
                placeholder="Password"
                name="password"
              />
              {submitted && values.password.length < 3 ? (
                <>
                  <InputDelete
                    onClick={() => setValues({ ...values, password: "" })}
                  />
                  <ErrorMessage>Please enter a password</ErrorMessage>
                </>
              ) : null}
            </FormLabel>
          </FormInput>
          <FormInput columnWidth="50">
            <FormLabel htmlFor="repeat-password">
              REPEAT PASSWORD
              <input
                className={
                  submitted && values.repeatPassword.length < 3
                    ? "form__input__invalid"
                    : "form__input"
                }
                onChange={handleChange}
                value={values.repeatPassword}
                id="repeat-password"
                type="password"
                placeholder="Repeat Password"
                name="repeatPassword"
              />
              {submitted && values.repeatPassword.length < 3 ? (
                <>
                  <InputDelete
                    onClick={() => setValues({ ...values, repeatPassword: "" })}
                  />
                  <ErrorMessage>Please repeat password</ErrorMessage>
                </>
              ) : null}
            </FormLabel>
          </FormInput>
        </FormRow>
        <FormAction>
          <div className="form__col-33 text-left register-btn-col">
            <Button type="submit">Register</Button>
          </div>
          <div className="form__col-66 text-right register-sign-in-col">
            <p className="login-wrapper__subtitle">
              Already have an account? &nbsp;
              <Link to="/login">Sign in</Link>
            </p>
          </div>
        </FormAction>
      </Form>
    </AuthorizationLayout>
  );
};

export default Register;
