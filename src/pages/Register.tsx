import { Button, Container, Form, Header } from "semantic-ui-react";
import Field from "../components/home/formik-fields/InputField";

function Register() {
  return (
    <Container text>
      <Header as="h2">Create a new account</Header>
      <Form>
        <Field label="First Name" type="text" placeholder="First name" />
        <Field label="Last Name" type="text" placeholder="last name" />
        <Field label="Pa" type="text" placeholder="First name" />

        <Button type="submit">Create account</Button>
      </Form>
    </Container>
  );
}

export default Register;
