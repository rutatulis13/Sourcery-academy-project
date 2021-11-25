import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from "../../components/FormComponents/Form/Form";
import FormAction from "../../components/FormComponents/FormAction/FormAction";
import FormRow from "../../components/FormComponents/FormRow/FormRow";
import FormInput from "../../components/FormComponents/FormInput/FormInput";
import InputDelete from "../../components/FormComponents/InputDelete/InputDelete";
import AuthorizationLayout from "../../components/AuthorizationLayout/AuthorizationLayout";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "../../components/FormComponents/Form/Form.scss";

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
          <FormInput
            column_width="50"
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
            label="FIRST NAME"
          >
            {submitted && values.firstName.length < 3 ? (
              <>
                <InputDelete
                  onClick={() => setValues({ ...values, firstName: "" })}
                />
                <ErrorMessage>Please enter a first name</ErrorMessage>
              </>
            ) : null}
          </FormInput>
          <FormInput
            column_width="50"
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
            label="LAST NAME"
          >
            {submitted && values.lastName.length < 3 ? (
              <>
                <InputDelete
                  onClick={() => setValues({ ...values, lastName: "" })}
                />
                <ErrorMessage>Please enter a first name</ErrorMessage>
              </>
            ) : null}
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            column_width="100"
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
            label="Email"
          >
            {submitted && values.email.length < 3 ? (
              <>
                <InputDelete
                  onClick={() => setValues({ ...values, email: "" })}
                />
                <ErrorMessage>Please enter a first name</ErrorMessage>
              </>
            ) : null}
          </FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            column_width="50"
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
            label="Password"
          >
            {submitted && values.password.length < 3 ? (
              <>
                <InputDelete
                  onClick={() => setValues({ ...values, password: "" })}
                />
                <ErrorMessage>Please enter a first name</ErrorMessage>
              </>
            ) : null}
          </FormInput>
          <FormInput
            column_width="50"
            className={
              submitted && values.repeatPassword.length < 3
                ? "form__input__invalid"
                : "form__input"
            }
            onChange={handleChange}
            value={values.repeatPassword}
            id="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            label="REPEAT PASSWORD"
          >
            {submitted && values.repeatPassword.length < 3 ? (
              <>
                <InputDelete
                  onClick={() => setValues({ ...values, repeatPassword: "" })}
                />
                <ErrorMessage>Please enter a first name</ErrorMessage>
              </>
            ) : null}
          </FormInput>
        </FormRow>
        <FormAction
          type="submit"
          to="/login"
          button_name="Register"
          words_before_link="Already have an account?"
          link_name="Sign in"
        />
      </Form>
    </AuthorizationLayout>
  );
};

export default Register;
