import AuthorizationLayout from "components/AuthorizationLayout/AuthorizationLayout";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from "../../components/FormComponents/Form/Form";
import FormRow from "../../components/FormComponents/FormRow/FormRow";
import FormInput from "../../components/FormComponents/FormInput/FormInput";
import FormAction from "../../components/FormComponents/FormAction/FormAction";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  return (
    <AuthorizationLayout title="Login" subtitle="Welcome back, please login.">
      <Form onSubmit={handleSubmit}>
        {submitted ? <Navigate to="/" /> : null}
        <FormRow>
          <FormInput
            width="100"
            onChange={handleChange}
            value={values.email}
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            label="Email"
            onClick={handleClear}
          />
        </FormRow>
        <FormRow>
          <FormInput
            width="100"
            onChange={handleChange}
            value={values.password}
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            label="password"
            onClick={handleClear}
          />
        </FormRow>
        <FormAction
          type="submit"
          to="/register"
          buttonName="Login"
          question="Don’t have an account?"
          linkName="Sign up"
        />
      </Form>
    </AuthorizationLayout>
  );
};

export default Login;
