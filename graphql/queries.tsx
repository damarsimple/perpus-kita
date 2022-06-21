import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query ($where: UserWhereInput) {
    findManyUser(where: $where) {
      id
      username
      name
      email
      password
      address
      balance
    }
  }
`;

export const DEL_USER = gql`
  mutation Mutation($where: UserWhereUniqueInput!) {
    deleteOneUser(where: $where) {
      id
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($data: UserCreateInput!) {
    createOneUser(data: $data) {
      email
      username
      name
      password
      address
      isAdmin
    }
  }
`;

export const EDIT_USER = gql`
  mutation UpdateOneUser(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateOneUser(data: $data, where: $where) {
      name
      username
      password
      address
    }
  }
`;

export const FIND_USER = gql`
  query Query($where: UserWhereUniqueInput!) {
    findUniqueUser(where: $where) {
      name
      username
      password
      address
      id
    }
  }
`;

// export const ADD_ADMIN = gql`
//   mutation CreateOneUser($data: UserCreateInput!) {
//     createOneUser(data: $data) {
//       email
//       name
//       username
//       password
//       address
//       isAdmin
//     }
//   }
// `;
