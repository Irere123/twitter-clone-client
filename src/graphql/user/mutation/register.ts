import { gql } from "@apollo/client";

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
