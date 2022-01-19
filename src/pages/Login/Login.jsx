import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import Form from "../../components/FormComponents/Form/Form";
import FormAction from "../../components/FormComponents/FormAction/FormAction";
import FormRow from "../../components/FormComponents/FormRow/FormRow";
import FormInput from "../../components/FormComponents/FormInput/FormInput";
import AuthorizationLayout from "components/AuthorizationLayout/AuthorizationLayout";
import { AuthContext } from "components/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

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

  const getErrorMessage = (name) => {
    if (submitted && values[name].length < 3) {
      return `Please enter ${name}`;
    }

    if (submitted && values[name] !== userDetails[name]) {
      return `Wrong ${name}`;
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userDetails &&
      values.email === userDetails.email &&
      values.password === userDetails.password
    ) {
      setValid(true);
      login();
      navigate("/");
    }
    setSubmitted(true);
  };

  return (
    <AuthorizationLayout title="Login" subtitle="Welcome back, please login.">
      <Form onSubmit={handleSubmit}>
        {submitted && valid ? <Navigate to="/" /> : null}
        <FormRow>
          <FormInput
            width="100"
            error={getErrorMessage("email")}
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
            error={getErrorMessage("password")}
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
          // isDisabled={values.email.length <= 2 || values.password.length <= 2}
        />
      </Form>
    </AuthorizationLayout>
  );
};

export default Login;
