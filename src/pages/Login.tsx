import React from "react";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { Field, Formik } from "formik";

import InputField from "../components/fields/InputField";
import { LoginComponent } from "../generated/graphql";

interface FormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  return (
    <Container text>
      <Header as="h2" color="teal">
        Login into your account
      </Header>
      <LoginComponent>
        {(login) => (
          <Formik<FormValues>
            initialValues={{ username: "", password: "" }}
            onSubmit={async (input) => {
              const response = await login({
                variables: { input },
              });

              console.log(response);
            }}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  value={values.username}
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
                  component={InputField}
                />
                <Field
                  value={values.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />
                <Button disabled={isSubmitting} color="green">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Container>
  );
};

export default Login;
