import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { Formik } from "formik";

import { RegisterComponent } from "../generated/graphql";
import { FormValues } from "../utils/types";

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
            onSubmit={async ({ password, username }) => {
              const response = await mutate({
                variables: { input: { password, username } },
              });

              console.log(response);
              history.push("/login");
            }}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <Form.Input
                    value={values.username}
                    onChange={handleChange}
                    name="username"
                    fluid
                    placeholder="Username"
                    label="Username"
                  />
                  <Form.Input
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    fluid
                    placeholder="Password"
                    label="Password"
                    type="password"
                  />
                </Form.Field>
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
