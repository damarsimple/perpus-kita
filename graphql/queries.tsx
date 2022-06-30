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

export const GET_BOOKS = gql`
  query Query($take: Int) {
    findManyBook(take: $take) {
      id
      title
      cover
      author {
        name
      }
    }
  }
`;

export const GET_AUTHORS = gql`
  query FindManyAuthor($take: Int) {
    findManyAuthor(take: $take) {
      id
      name
      _count {
        books
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(email: $username, password: $password) {
      id
    }
  }
`;
