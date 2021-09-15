import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { Field, Formik } from "formik";

import { RegisterComponent } from "../generated/graphql";
import { FormValues } from "../utils/types";
import InputField from "../components/fields/InputField";

interface Props extends RouteComponentProps {}

const Register: React.FC<Props> = ({ history }) => {
  return (
    <Container text>
      <Header as="h2" color="teal">
        Create a new account
      </Header>
      <RegisterComponent>
        {(mutate) => (
          <Formik<FormValues>
            initialValues={{ username: "", password: "" }}
            onSubmit={async (input, { setErrors }) => {
              const response = await mutate({
                variables: { input },
              });

              if (response && response.data && !response.data.register) {
                setErrors({
                  username: "username already taken",
                });
                return;
              }

              history.push("/login");
            }}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  value={values.username}
                  onChange={handleChange}
                  name="username"
                  fluid
                  placeholder="Username"
                  component={InputField}
                />
                <Field
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  fluid
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />

                <Button disabled={isSubmitting} type="submit" color="green">
                  Create account
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Container>
  );
};

export default Register;
