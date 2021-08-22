import { Button, Container, Form, Header } from "semantic-ui-react";
import { Field, Formik } from "formik";
import InputField from "../components/formik-fields/InputField";

interface FormValues {
  username: string;
  password: string;
}

function Login() {
  return (
    <Container text>
      <Header as="h2" color="teal">
        Login into your account
      </Header>
      <Formik<FormValues>
        initialValues={{ username: "", password: "" }}
        onSubmit={() => {}}
      >
        <Form>
          <Field
            name="username"
            label="Username"
            placeholder="Username"
            component={InputField}
          />
          <Field
            name="password"
            label="Password"
            placeholder="Password"
            component={InputField}
          />
          <Button color="green">Login</Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default Login;
