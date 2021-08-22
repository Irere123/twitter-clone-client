import { Button, Container, Form, Header } from "semantic-ui-react";
import { Field, Formik } from "formik";
import { Mutation } from "react-apollo";

import InputField from "../components/formik-fields/InputField";
import { registerMutation } from "../graphql/user/mutation/register";

interface FormValues {
  firstName: string;
  lastName: string;
  password: string;
}

function Register() {
  return (
    <Container text>
      <Header as="h2" color="teal">
        Create a new account
      </Header>
      <Mutation mutation={registerMutation}>
        {() => (
          <Formik<FormValues>
            initialValues={{
              firstName: "",
              lastName: "",
              password: "",
            }}
            onSubmit={async (input, { setSubmitting, resetForm }) => {}}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  component={InputField}
                />
                <Field
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  component={InputField}
                />
                <Field
                  name="password"
                  label="Password"
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
      </Mutation>
    </Container>
  );
}

export default Register;
