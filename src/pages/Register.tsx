import { useMutation } from "@apollo/react-hooks";
import React from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { registerMutation } from "../graphql/user/mutation/register";

interface Props extends RouteComponentProps {}

const Register: React.FC<Props> = ({ history }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [addUser, { loading }] = useMutation(registerMutation, {
    onError(err) {
      setErrors(err.graphQLErrors[0]);
      console.log(errors);
    },
    variables: { input: values },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    addUser();
    // history.push("/login");
  };

  return (
    <Container text>
      <Header as="h2" color="teal">
        Create a new account
      </Header>

      <Form onSubmit={onSubmit} className={loading ? "loading" : ""}>
        <Form.Field>
          <Form.Input
            value={values.username}
            onChange={onChange}
            name="username"
            fluid
            placeholder="Username"
            label="Username"
          />
          <Form.Input
            value={values.password}
            onChange={onChange}
            name="password"
            fluid
            placeholder="Password"
            label="Password"
            type="password"
          />
        </Form.Field>
        <Button type="submit" color="green">
          Create account
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
