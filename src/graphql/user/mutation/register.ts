import gql from "graphql-tag";

export const registerMutation = gql`
  mutation ($input: RegisterInput!) {
    register(input: $input) {
      ok
      errors {
        path
        message
      }
    }
  }
`;
