import { Button, Container, Form, Header } from "semantic-ui-react";
import Field from "../components/home/formik-fields/InputField";

function Login() {
  return (
    <Container text>
      <Header as="h2">Login into your account</Header>
      <Form>
        <Field
          label="Username"
          placeholder="Fist Name or Last Name"
          type="text"
        />
        <Field label="Password" placeholder="Password" type="password" />
        <Button>Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
