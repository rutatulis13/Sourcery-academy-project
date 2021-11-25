import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from "../../components/FormComponents/Form/Form";
import FormAction from "../../components/FormComponents/FormAction/FormAction";
import FormRow from "../../components/FormComponents/FormRow/FormRow";
import FormInput from "../../components/FormComponents/FormInput/FormInput";
import AuthorizationLayout from "../../components/AuthorizationLayout/AuthorizationLayout";

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

  const handleClear = (name) => {
    setValues({
      ...values,
      [name]: "",
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
            width="50"
            isValid={!submitted || values.firstName.length >= 3}
            onChange={handleChange}
            value={values.firstName}
            id="first-name"
            type="text"
            placeholder="First Name"
            name="firstName"
            label="FIRST NAME"
            onClick={handleClear}
          ></FormInput>
          <FormInput
            width="50"
            isValid={!submitted || values.lastName.length >= 3}
            onChange={handleChange}
            value={values.lastName}
            id="last-name"
            type="text"
            placeholder="Last Name"
            name="lastName"
            label="LAST NAME"
            onClick={handleClear}
          ></FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            width="100"
            isValid={!submitted || values.email.length >= 3}
            onChange={handleChange}
            value={values.email}
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            label="Email"
            onClick={handleClear}
          ></FormInput>
        </FormRow>
        <FormRow>
          <FormInput
            width="50"
            isValid={!submitted || values.password.length >= 3}
            onChange={handleChange}
            value={values.password}
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
            onClick={handleClear}
          ></FormInput>
          <FormInput
            width="50"
            isValid={!submitted || values.repeatPassword.length >= 3}
            onChange={handleChange}
            value={values.repeatPassword}
            id="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            label="REPEAT PASSWORD"
            onClick={handleClear}
          ></FormInput>
        </FormRow>
        <FormAction
          type="submit"
          to="/login"
          buttonName="Register"
          question="Already have an account?"
          linkName="Sign in"
        />
      </Form>
    </AuthorizationLayout>
  );
};

export default Register;
