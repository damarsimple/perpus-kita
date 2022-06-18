import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query FindManyUser {
    findManyUser {
      id
      email
      name
      username
      address
      balance
    }
  }
`;
