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

export const GET_BOOKS = gql`
  query Query($take: Int) {
    findManyBook(take: $take) {
      id
      title
      cover
      categories {
        name
      }
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

//start there

export const BORROW = gql`
  mutation Mutation($data: UserLoanCreateInput!) {
    createOneUserLoan(data: $data) {
      id
      userId
      user {
        id
        name
      }
      bookId
      loanExpiredAt
      createdAt
      price
      status
    }
  }
`;

// {
// "data": {
// "user": {
// "connect": {
// "id":
// }
// },
// "book": {
// "connect": {
// "id": 2
// }
// },
// "loanExpiredAt": "2022-7-8",
// "createdAt": "2022-7-1",
// "price": 10,
// "status": "PENDING"
// }

export const TRANSAKSI1 = gql`
  mutation Mutation(
    $updateOneUserData2: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateOneUser(data: $updateOneUserData2, where: $where) {
      id
      balance
    }
  }
`;

export const TRANSAKSI2 = gql`
  mutation Mutation($data: TransactionCreateInput!) {
    createOneTransaction(data: $data) {
      id
      amount
      type
      user {
        id
        name
        balance
      }
    }
  }
`;

export const TRANSAKSI3 = gql`
  mutation UpdateOneUser(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateOneUser(data: $data, where: $where) {
      id
      balance
    }
  }
`;
// {
// "data": {
// "amount": 10,
// "type": "MIDTRANS",
// "user": {
// "connect": {
// "id": 1
// }
// }
// },
// "updateOneUserData2": {
// "balance": {
// "increment": 10
// }
// },
// "where": {
// "id": 1
//   // }
// }

export const EDIT_AUTH = gql`
  mutation Mutation(
    $data: AuthorUpdateInput!
    $where: AuthorWhereUniqueInput!
  ) {
    updateOneAuthor(data: $data, where: $where) {
      name
    }
  }
`;

// {
// "data": {
// "name": {
// "set": null
// }
// },
// "where": {
// "id": null
// }
// }

export const ADD_AUTH = gql`
  mutation Mutation($data: AuthorCreateInput!) {
    createOneAuthor(data: $data) {
      id
    }
  }
`;

export const DEL_AUTH = gql`
  mutation Mutation($where: AuthorWhereUniqueInput!) {
    deleteOneAuthor(where: $where) {
      id
    }
  }
`;

// {
//   "where": {
//     "id": null
//   }
// }

export const GET_CATE = gql`
  query Query {
    findManyCategory {
      id
      name
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation Mutation($data: BookCreateInput!) {
    createOneBook(data: $data) {
      id
    }
  }
`;

// {
// "data": {
// "title": null,
// "cover": null,
// "author": {
// "connect": {
// "id": null
// }
// },
// "categories": {
// "connect": [
// {
// "id": null
// }
// ]
// }
// }
// }

export const GET_TRANS = gql`
  query Query {
    findManyTransaction {
      id
      amount
      type
      userId
      user {
        name
      }
    }
  }
`;

export const GET_LOANS = gql`
  query Query($where: UserLoanWhereInput) {
    findManyUserLoan(where: $where) {
      id
      user {
        id
        name
      }
      book {
        id
        title
        cover
      }
      status
      price
    }
  }
`;

export const MY_TRANS = gql`
  query Query($where: TransactionWhereInput) {
    findManyTransaction(where: $where) {
      id
      amount
      type
      userId
      user {
        name
      }
    }
  }
`;

export const MY_BALANCE = gql`
  query Query($where: UserWhereUniqueInput!) {
    findUniqueUser(where: $where) {
      balance
    }
  }
`;
