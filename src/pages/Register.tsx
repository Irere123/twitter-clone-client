import React from "react";
import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { useRegisterMutation } from "../generated/graphql";

interface Props extends RouteComponentProps {}

const Register: React.FC<Props> = ({ history }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [addUser, { loading }] = useRegisterMutation({
    variables: {
      input: { password: values.password, username: values.username },
    },
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
