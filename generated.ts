//@ts-nocheck
/* eslint-disable */

// *******************************************************
// *******************************************************
//
// GENERATED FILE, DO NOT MODIFY
//
// Made by Victor Garcia ®
//
// https://github.com/victorgarciaesgi
// *******************************************************
// *******************************************************
// 💙

export type Maybe<T> = T | null;

export interface Author {
  id: number;
  name: string;
  books: Book[];
  createdAt: undefined;
  updatedAt: undefined;
  _count: AuthorCountOutputType;
}

export interface Category {
  id: number;
  name: string;
  books: Book[];
  _count: CategoryCountOutputType;
}

export interface Book {
  id: number;
  title: string;
  cover: Maybe<string>;
  authorId: number;
  author: Author;
  createdAt: undefined;
  updatedAt: undefined;
  categories: Category[];
  UserLoan: UserLoan[];
  _count: BookCountOutputType;
}

export interface UserLoan {
  id: number;
  userId: number;
  user: User;
  bookId: number;
  book: Book;
  loanExpiredAt: undefined;
  createdAt: undefined;
  updatedAt: undefined;
  price: number;
  status: LoanStatus;
}

export interface Transaction {
  id: number;
  amount: number;
  type: string;
  createdAt: undefined;
  updatedAt: undefined;
  userId: number;
  user: User;
}

export interface User {
  id: number;
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin: boolean;
  createdAt: undefined;
  updatedAt: undefined;
  balance: number;
  userLoans: UserLoan[];
  transactions: Transaction[];
  _count: UserCountOutputType;
}

export interface BatchPayload {
  count: number;
}

export enum UserScalarFieldEnum {
  Id = 'id',
  Email = 'email',
  Name = 'name',
  Username = 'username',
  Password = 'password',
  Address = 'address',
  Isadmin = 'isAdmin',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Balance = 'balance',
}
export enum TransactionScalarFieldEnum {
  Id = 'id',
  Amount = 'amount',
  Type = 'type',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Userid = 'userId',
}
export enum UserLoanScalarFieldEnum {
  Id = 'id',
  Userid = 'userId',
  Bookid = 'bookId',
  Loanexpiredat = 'loanExpiredAt',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
  Price = 'price',
  Status = 'status',
}
export enum BookScalarFieldEnum {
  Id = 'id',
  Title = 'title',
  Cover = 'cover',
  Authorid = 'authorId',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum CategoryScalarFieldEnum {
  Id = 'id',
  Name = 'name',
}
export enum AuthorScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Createdat = 'createdAt',
  Updatedat = 'updatedAt',
}
export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}
export enum LoanStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Returned = 'RETURNED',
}
export interface UserWhereInput {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: IntFilter;
  email?: StringFilter;
  name?: StringFilter;
  username?: StringFilter;
  password?: StringFilter;
  address?: StringFilter;
  isAdmin?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  balance?: FloatFilter;
  userLoans?: UserLoanListRelationFilter;
  transactions?: TransactionListRelationFilter;
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  address?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  balance?: SortOrder;
  userLoans?: UserLoanOrderByRelationAggregateInput;
  transactions?: TransactionOrderByRelationAggregateInput;
}

export interface UserWhereUniqueInput {
  id?: number;
  email?: string;
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  address?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  balance?: SortOrder;
  _count?: UserCountOrderByAggregateInput;
  _avg?: UserAvgOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
  _sum?: UserSumOrderByAggregateInput;
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  email?: StringWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  username?: StringWithAggregatesFilter;
  password?: StringWithAggregatesFilter;
  address?: StringWithAggregatesFilter;
  isAdmin?: BoolWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  balance?: FloatWithAggregatesFilter;
}

export interface TransactionWhereInput {
  AND?: TransactionWhereInput[];
  OR?: TransactionWhereInput[];
  NOT?: TransactionWhereInput[];
  id?: IntFilter;
  amount?: FloatFilter;
  type?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  userId?: IntFilter;
  user?: UserWhereInput;
}

export interface TransactionOrderByWithRelationInput {
  id?: SortOrder;
  amount?: SortOrder;
  type?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
}

export interface TransactionWhereUniqueInput {
  id?: number;
}

export interface TransactionOrderByWithAggregationInput {
  id?: SortOrder;
  amount?: SortOrder;
  type?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  _count?: TransactionCountOrderByAggregateInput;
  _avg?: TransactionAvgOrderByAggregateInput;
  _max?: TransactionMaxOrderByAggregateInput;
  _min?: TransactionMinOrderByAggregateInput;
  _sum?: TransactionSumOrderByAggregateInput;
}

export interface TransactionScalarWhereWithAggregatesInput {
  AND?: TransactionScalarWhereWithAggregatesInput[];
  OR?: TransactionScalarWhereWithAggregatesInput[];
  NOT?: TransactionScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  amount?: FloatWithAggregatesFilter;
  type?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  userId?: IntWithAggregatesFilter;
}

export interface UserLoanWhereInput {
  AND?: UserLoanWhereInput[];
  OR?: UserLoanWhereInput[];
  NOT?: UserLoanWhereInput[];
  id?: IntFilter;
  userId?: IntFilter;
  user?: UserWhereInput;
  bookId?: IntFilter;
  book?: BookWhereInput;
  loanExpiredAt?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  price?: IntFilter;
  status?: EnumLoanStatusFilter;
}

export interface UserLoanOrderByWithRelationInput {
  id?: SortOrder;
  userId?: SortOrder;
  user?: UserOrderByWithRelationInput;
  bookId?: SortOrder;
  book?: BookOrderByWithRelationInput;
  loanExpiredAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
}

export interface UserLoanWhereUniqueInput {
  id?: number;
}

export interface UserLoanOrderByWithAggregationInput {
  id?: SortOrder;
  userId?: SortOrder;
  bookId?: SortOrder;
  loanExpiredAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  _count?: UserLoanCountOrderByAggregateInput;
  _avg?: UserLoanAvgOrderByAggregateInput;
  _max?: UserLoanMaxOrderByAggregateInput;
  _min?: UserLoanMinOrderByAggregateInput;
  _sum?: UserLoanSumOrderByAggregateInput;
}

export interface UserLoanScalarWhereWithAggregatesInput {
  AND?: UserLoanScalarWhereWithAggregatesInput[];
  OR?: UserLoanScalarWhereWithAggregatesInput[];
  NOT?: UserLoanScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  userId?: IntWithAggregatesFilter;
  bookId?: IntWithAggregatesFilter;
  loanExpiredAt?: DateTimeWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  price?: IntWithAggregatesFilter;
  status?: EnumLoanStatusWithAggregatesFilter;
}

export interface BookWhereInput {
  AND?: BookWhereInput[];
  OR?: BookWhereInput[];
  NOT?: BookWhereInput[];
  id?: IntFilter;
  title?: StringFilter;
  cover?: StringNullableFilter;
  authorId?: IntFilter;
  author?: AuthorWhereInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  categories?: CategoryListRelationFilter;
  UserLoan?: UserLoanListRelationFilter;
}

export interface BookOrderByWithRelationInput {
  id?: SortOrder;
  title?: SortOrder;
  cover?: SortOrder;
  authorId?: SortOrder;
  author?: AuthorOrderByWithRelationInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  categories?: CategoryOrderByRelationAggregateInput;
  UserLoan?: UserLoanOrderByRelationAggregateInput;
}

export interface BookWhereUniqueInput {
  id?: number;
}

export interface BookOrderByWithAggregationInput {
  id?: SortOrder;
  title?: SortOrder;
  cover?: SortOrder;
  authorId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: BookCountOrderByAggregateInput;
  _avg?: BookAvgOrderByAggregateInput;
  _max?: BookMaxOrderByAggregateInput;
  _min?: BookMinOrderByAggregateInput;
  _sum?: BookSumOrderByAggregateInput;
}

export interface BookScalarWhereWithAggregatesInput {
  AND?: BookScalarWhereWithAggregatesInput[];
  OR?: BookScalarWhereWithAggregatesInput[];
  NOT?: BookScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  title?: StringWithAggregatesFilter;
  cover?: StringNullableWithAggregatesFilter;
  authorId?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[];
  OR?: CategoryWhereInput[];
  NOT?: CategoryWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  books?: BookListRelationFilter;
}

export interface CategoryOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  books?: BookOrderByRelationAggregateInput;
}

export interface CategoryWhereUniqueInput {
  id?: number;
}

export interface CategoryOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  _count?: CategoryCountOrderByAggregateInput;
  _avg?: CategoryAvgOrderByAggregateInput;
  _max?: CategoryMaxOrderByAggregateInput;
  _min?: CategoryMinOrderByAggregateInput;
  _sum?: CategorySumOrderByAggregateInput;
}

export interface CategoryScalarWhereWithAggregatesInput {
  AND?: CategoryScalarWhereWithAggregatesInput[];
  OR?: CategoryScalarWhereWithAggregatesInput[];
  NOT?: CategoryScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
}

export interface AuthorWhereInput {
  AND?: AuthorWhereInput[];
  OR?: AuthorWhereInput[];
  NOT?: AuthorWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
  books?: BookListRelationFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface AuthorOrderByWithRelationInput {
  id?: SortOrder;
  name?: SortOrder;
  books?: BookOrderByRelationAggregateInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AuthorWhereUniqueInput {
  id?: number;
}

export interface AuthorOrderByWithAggregationInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  _count?: AuthorCountOrderByAggregateInput;
  _avg?: AuthorAvgOrderByAggregateInput;
  _max?: AuthorMaxOrderByAggregateInput;
  _min?: AuthorMinOrderByAggregateInput;
  _sum?: AuthorSumOrderByAggregateInput;
}

export interface AuthorScalarWhereWithAggregatesInput {
  AND?: AuthorScalarWhereWithAggregatesInput[];
  OR?: AuthorScalarWhereWithAggregatesInput[];
  NOT?: AuthorScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  name?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
}

export interface UserCreateInput {
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  balance?: number;
  userLoans?: UserLoanCreateNestedManyWithoutUserInput;
  transactions?: TransactionCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateInput {
  id?: number;
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  balance?: number;
  userLoans?: UserLoanUncheckedCreateNestedManyWithoutUserInput;
  transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserUpdateInput {
  email?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  username?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  userLoans?: UserLoanUpdateManyWithoutUserInput;
  transactions?: TransactionUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  username?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  userLoans?: UserLoanUncheckedUpdateManyWithoutUserInput;
  transactions?: TransactionUncheckedUpdateManyWithoutUserInput;
}

export interface UserCreateManyInput {
  id?: number;
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  balance?: number;
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  username?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
}

export interface TransactionCreateInput {
  amount: number;
  type: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  user: UserCreateNestedOneWithoutTransactionsInput;
}

export interface TransactionUncheckedCreateInput {
  id?: number;
  amount: number;
  type: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  userId: number;
}

export interface TransactionUpdateInput {
  amount?: FloatFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  user?: UserUpdateOneRequiredWithoutTransactionsInput;
}

export interface TransactionUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
}

export interface TransactionCreateManyInput {
  id?: number;
  amount: number;
  type: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  userId: number;
}

export interface TransactionUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
}

export interface UserLoanCreateInput {
  user: UserCreateNestedOneWithoutUserLoansInput;
  book: BookCreateNestedOneWithoutUserLoanInput;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface UserLoanUncheckedCreateInput {
  id?: number;
  userId: number;
  bookId: number;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface UserLoanUpdateInput {
  user?: UserUpdateOneRequiredWithoutUserLoansInput;
  book?: BookUpdateOneRequiredWithoutUserLoanInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface UserLoanUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  bookId?: IntFieldUpdateOperationsInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface UserLoanCreateManyInput {
  id?: number;
  userId: number;
  bookId: number;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface UserLoanUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  bookId?: IntFieldUpdateOperationsInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface BookCreateInput {
  title: string;
  cover?: string;
  author: AuthorCreateNestedOneWithoutBooksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  categories?: CategoryCreateNestedManyWithoutBooksInput;
  UserLoan?: UserLoanCreateNestedManyWithoutBookInput;
}

export interface BookUncheckedCreateInput {
  id?: number;
  title: string;
  cover?: string;
  authorId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
  categories?: CategoryUncheckedCreateNestedManyWithoutBooksInput;
  UserLoan?: UserLoanUncheckedCreateNestedManyWithoutBookInput;
}

export interface BookUpdateInput {
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  author?: AuthorUpdateOneRequiredWithoutBooksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  categories?: CategoryUpdateManyWithoutBooksInput;
  UserLoan?: UserLoanUpdateManyWithoutBookInput;
}

export interface BookUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  categories?: CategoryUncheckedUpdateManyWithoutBooksInput;
  UserLoan?: UserLoanUncheckedUpdateManyWithoutBookInput;
}

export interface BookCreateManyInput {
  id?: number;
  title: string;
  cover?: string;
  authorId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface BookUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface CategoryCreateInput {
  name: string;
  books?: BookCreateNestedManyWithoutCategoriesInput;
}

export interface CategoryUncheckedCreateInput {
  id?: number;
  name: string;
  books?: BookUncheckedCreateNestedManyWithoutCategoriesInput;
}

export interface CategoryUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  books?: BookUpdateManyWithoutCategoriesInput;
}

export interface CategoryUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  books?: BookUncheckedUpdateManyWithoutCategoriesInput;
}

export interface CategoryCreateManyInput {
  id?: number;
  name: string;
}

export interface CategoryUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface AuthorCreateInput {
  name: string;
  books?: BookCreateNestedManyWithoutAuthorInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorUncheckedCreateInput {
  id?: number;
  name: string;
  books?: BookUncheckedCreateNestedManyWithoutAuthorInput;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorUpdateInput {
  name?: StringFieldUpdateOperationsInput;
  books?: BookUpdateManyWithoutAuthorInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AuthorUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  books?: BookUncheckedUpdateManyWithoutAuthorInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AuthorCreateManyInput {
  id?: number;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface BoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface DateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface FloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface UserLoanListRelationFilter {
  every?: UserLoanWhereInput;
  some?: UserLoanWhereInput;
  none?: UserLoanWhereInput;
}

export interface TransactionListRelationFilter {
  every?: TransactionWhereInput;
  some?: TransactionWhereInput;
  none?: TransactionWhereInput;
}

export interface UserLoanOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface TransactionOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  address?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  balance?: SortOrder;
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder;
  balance?: SortOrder;
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  address?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  balance?: SortOrder;
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  address?: SortOrder;
  isAdmin?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  balance?: SortOrder;
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder;
  balance?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface BoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface FloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}

export interface TransactionCountOrderByAggregateInput {
  id?: SortOrder;
  amount?: SortOrder;
  type?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
}

export interface TransactionAvgOrderByAggregateInput {
  id?: SortOrder;
  amount?: SortOrder;
  userId?: SortOrder;
}

export interface TransactionMaxOrderByAggregateInput {
  id?: SortOrder;
  amount?: SortOrder;
  type?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
}

export interface TransactionMinOrderByAggregateInput {
  id?: SortOrder;
  amount?: SortOrder;
  type?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
}

export interface TransactionSumOrderByAggregateInput {
  id?: SortOrder;
  amount?: SortOrder;
  userId?: SortOrder;
}

export interface BookRelationFilter {
  is?: BookWhereInput;
  isNot?: BookWhereInput;
}

export interface EnumLoanStatusFilter {
  equals?: LoanStatus;
  in?: LoanStatus[];
  notIn?: LoanStatus[];
  not?: NestedEnumLoanStatusFilter;
}

export interface UserLoanCountOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  bookId?: SortOrder;
  loanExpiredAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
}

export interface UserLoanAvgOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  bookId?: SortOrder;
  price?: SortOrder;
}

export interface UserLoanMaxOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  bookId?: SortOrder;
  loanExpiredAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
}

export interface UserLoanMinOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  bookId?: SortOrder;
  loanExpiredAt?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
}

export interface UserLoanSumOrderByAggregateInput {
  id?: SortOrder;
  userId?: SortOrder;
  bookId?: SortOrder;
  price?: SortOrder;
}

export interface EnumLoanStatusWithAggregatesFilter {
  equals?: LoanStatus;
  in?: LoanStatus[];
  notIn?: LoanStatus[];
  not?: NestedEnumLoanStatusWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumLoanStatusFilter;
  _max?: NestedEnumLoanStatusFilter;
}

export interface StringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter;
}

export interface AuthorRelationFilter {
  is?: AuthorWhereInput;
  isNot?: AuthorWhereInput;
}

export interface CategoryListRelationFilter {
  every?: CategoryWhereInput;
  some?: CategoryWhereInput;
  none?: CategoryWhereInput;
}

export interface CategoryOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface BookCountOrderByAggregateInput {
  id?: SortOrder;
  title?: SortOrder;
  cover?: SortOrder;
  authorId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface BookAvgOrderByAggregateInput {
  id?: SortOrder;
  authorId?: SortOrder;
}

export interface BookMaxOrderByAggregateInput {
  id?: SortOrder;
  title?: SortOrder;
  cover?: SortOrder;
  authorId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface BookMinOrderByAggregateInput {
  id?: SortOrder;
  title?: SortOrder;
  cover?: SortOrder;
  authorId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface BookSumOrderByAggregateInput {
  id?: SortOrder;
  authorId?: SortOrder;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface BookListRelationFilter {
  every?: BookWhereInput;
  some?: BookWhereInput;
  none?: BookWhereInput;
}

export interface BookOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface CategoryCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
}

export interface CategoryAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface CategoryMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
}

export interface CategoryMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
}

export interface CategorySumOrderByAggregateInput {
  id?: SortOrder;
}

export interface AuthorCountOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AuthorAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface AuthorMaxOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AuthorMinOrderByAggregateInput {
  id?: SortOrder;
  name?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}

export interface AuthorSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface UserLoanCreateNestedManyWithoutUserInput {
  create?: UserLoanCreateWithoutUserInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutUserInput[];
  createMany?: UserLoanCreateManyUserInputEnvelope;
  connect?: UserLoanWhereUniqueInput[];
}

export interface TransactionCreateNestedManyWithoutUserInput {
  create?: TransactionCreateWithoutUserInput[];
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[];
  createMany?: TransactionCreateManyUserInputEnvelope;
  connect?: TransactionWhereUniqueInput[];
}

export interface UserLoanUncheckedCreateNestedManyWithoutUserInput {
  create?: UserLoanCreateWithoutUserInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutUserInput[];
  createMany?: UserLoanCreateManyUserInputEnvelope;
  connect?: UserLoanWhereUniqueInput[];
}

export interface TransactionUncheckedCreateNestedManyWithoutUserInput {
  create?: TransactionCreateWithoutUserInput[];
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[];
  createMany?: TransactionCreateManyUserInputEnvelope;
  connect?: TransactionWhereUniqueInput[];
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: undefined;
}

export interface FloatFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface UserLoanUpdateManyWithoutUserInput {
  create?: UserLoanCreateWithoutUserInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutUserInput[];
  upsert?: UserLoanUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: UserLoanCreateManyUserInputEnvelope;
  set?: UserLoanWhereUniqueInput[];
  disconnect?: UserLoanWhereUniqueInput[];
  delete?: UserLoanWhereUniqueInput[];
  connect?: UserLoanWhereUniqueInput[];
  update?: UserLoanUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: UserLoanUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: UserLoanScalarWhereInput[];
}

export interface TransactionUpdateManyWithoutUserInput {
  create?: TransactionCreateWithoutUserInput[];
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[];
  upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: TransactionCreateManyUserInputEnvelope;
  set?: TransactionWhereUniqueInput[];
  disconnect?: TransactionWhereUniqueInput[];
  delete?: TransactionWhereUniqueInput[];
  connect?: TransactionWhereUniqueInput[];
  update?: TransactionUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: TransactionUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: TransactionScalarWhereInput[];
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface UserLoanUncheckedUpdateManyWithoutUserInput {
  create?: UserLoanCreateWithoutUserInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutUserInput[];
  upsert?: UserLoanUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: UserLoanCreateManyUserInputEnvelope;
  set?: UserLoanWhereUniqueInput[];
  disconnect?: UserLoanWhereUniqueInput[];
  delete?: UserLoanWhereUniqueInput[];
  connect?: UserLoanWhereUniqueInput[];
  update?: UserLoanUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: UserLoanUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: UserLoanScalarWhereInput[];
}

export interface TransactionUncheckedUpdateManyWithoutUserInput {
  create?: TransactionCreateWithoutUserInput[];
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[];
  upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: TransactionCreateManyUserInputEnvelope;
  set?: TransactionWhereUniqueInput[];
  disconnect?: TransactionWhereUniqueInput[];
  delete?: TransactionWhereUniqueInput[];
  connect?: TransactionWhereUniqueInput[];
  update?: TransactionUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: TransactionUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: TransactionScalarWhereInput[];
}

export interface UserCreateNestedOneWithoutTransactionsInput {
  create?: UserUncheckedCreateWithoutTransactionsInput;
  connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutTransactionsInput {
  create?: UserUncheckedCreateWithoutTransactionsInput;
  connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput;
  upsert?: UserUpsertWithoutTransactionsInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutTransactionsInput;
}

export interface UserCreateNestedOneWithoutUserLoansInput {
  create?: UserUncheckedCreateWithoutUserLoansInput;
  connectOrCreate?: UserCreateOrConnectWithoutUserLoansInput;
  connect?: UserWhereUniqueInput;
}

export interface BookCreateNestedOneWithoutUserLoanInput {
  create?: BookUncheckedCreateWithoutUserLoanInput;
  connectOrCreate?: BookCreateOrConnectWithoutUserLoanInput;
  connect?: BookWhereUniqueInput;
}

export interface UserUpdateOneRequiredWithoutUserLoansInput {
  create?: UserUncheckedCreateWithoutUserLoansInput;
  connectOrCreate?: UserCreateOrConnectWithoutUserLoansInput;
  upsert?: UserUpsertWithoutUserLoansInput;
  connect?: UserWhereUniqueInput;
  update?: UserUncheckedUpdateWithoutUserLoansInput;
}

export interface BookUpdateOneRequiredWithoutUserLoanInput {
  create?: BookUncheckedCreateWithoutUserLoanInput;
  connectOrCreate?: BookCreateOrConnectWithoutUserLoanInput;
  upsert?: BookUpsertWithoutUserLoanInput;
  connect?: BookWhereUniqueInput;
  update?: BookUncheckedUpdateWithoutUserLoanInput;
}

export interface EnumLoanStatusFieldUpdateOperationsInput {
  set?: LoanStatus;
}

export interface AuthorCreateNestedOneWithoutBooksInput {
  create?: AuthorUncheckedCreateWithoutBooksInput;
  connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput;
  connect?: AuthorWhereUniqueInput;
}

export interface CategoryCreateNestedManyWithoutBooksInput {
  create?: CategoryCreateWithoutBooksInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput[];
  connect?: CategoryWhereUniqueInput[];
}

export interface UserLoanCreateNestedManyWithoutBookInput {
  create?: UserLoanCreateWithoutBookInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutBookInput[];
  createMany?: UserLoanCreateManyBookInputEnvelope;
  connect?: UserLoanWhereUniqueInput[];
}

export interface CategoryUncheckedCreateNestedManyWithoutBooksInput {
  create?: CategoryCreateWithoutBooksInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput[];
  connect?: CategoryWhereUniqueInput[];
}

export interface UserLoanUncheckedCreateNestedManyWithoutBookInput {
  create?: UserLoanCreateWithoutBookInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutBookInput[];
  createMany?: UserLoanCreateManyBookInputEnvelope;
  connect?: UserLoanWhereUniqueInput[];
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string;
}

export interface AuthorUpdateOneRequiredWithoutBooksInput {
  create?: AuthorUncheckedCreateWithoutBooksInput;
  connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput;
  upsert?: AuthorUpsertWithoutBooksInput;
  connect?: AuthorWhereUniqueInput;
  update?: AuthorUncheckedUpdateWithoutBooksInput;
}

export interface CategoryUpdateManyWithoutBooksInput {
  create?: CategoryCreateWithoutBooksInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput[];
  upsert?: CategoryUpsertWithWhereUniqueWithoutBooksInput[];
  set?: CategoryWhereUniqueInput[];
  disconnect?: CategoryWhereUniqueInput[];
  delete?: CategoryWhereUniqueInput[];
  connect?: CategoryWhereUniqueInput[];
  update?: CategoryUpdateWithWhereUniqueWithoutBooksInput[];
  updateMany?: CategoryUpdateManyWithWhereWithoutBooksInput[];
  deleteMany?: CategoryScalarWhereInput[];
}

export interface UserLoanUpdateManyWithoutBookInput {
  create?: UserLoanCreateWithoutBookInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutBookInput[];
  upsert?: UserLoanUpsertWithWhereUniqueWithoutBookInput[];
  createMany?: UserLoanCreateManyBookInputEnvelope;
  set?: UserLoanWhereUniqueInput[];
  disconnect?: UserLoanWhereUniqueInput[];
  delete?: UserLoanWhereUniqueInput[];
  connect?: UserLoanWhereUniqueInput[];
  update?: UserLoanUpdateWithWhereUniqueWithoutBookInput[];
  updateMany?: UserLoanUpdateManyWithWhereWithoutBookInput[];
  deleteMany?: UserLoanScalarWhereInput[];
}

export interface CategoryUncheckedUpdateManyWithoutBooksInput {
  create?: CategoryCreateWithoutBooksInput[];
  connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput[];
  upsert?: CategoryUpsertWithWhereUniqueWithoutBooksInput[];
  set?: CategoryWhereUniqueInput[];
  disconnect?: CategoryWhereUniqueInput[];
  delete?: CategoryWhereUniqueInput[];
  connect?: CategoryWhereUniqueInput[];
  update?: CategoryUpdateWithWhereUniqueWithoutBooksInput[];
  updateMany?: CategoryUpdateManyWithWhereWithoutBooksInput[];
  deleteMany?: CategoryScalarWhereInput[];
}

export interface UserLoanUncheckedUpdateManyWithoutBookInput {
  create?: UserLoanCreateWithoutBookInput[];
  connectOrCreate?: UserLoanCreateOrConnectWithoutBookInput[];
  upsert?: UserLoanUpsertWithWhereUniqueWithoutBookInput[];
  createMany?: UserLoanCreateManyBookInputEnvelope;
  set?: UserLoanWhereUniqueInput[];
  disconnect?: UserLoanWhereUniqueInput[];
  delete?: UserLoanWhereUniqueInput[];
  connect?: UserLoanWhereUniqueInput[];
  update?: UserLoanUpdateWithWhereUniqueWithoutBookInput[];
  updateMany?: UserLoanUpdateManyWithWhereWithoutBookInput[];
  deleteMany?: UserLoanScalarWhereInput[];
}

export interface BookCreateNestedManyWithoutCategoriesInput {
  create?: BookCreateWithoutCategoriesInput[];
  connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput[];
  connect?: BookWhereUniqueInput[];
}

export interface BookUncheckedCreateNestedManyWithoutCategoriesInput {
  create?: BookCreateWithoutCategoriesInput[];
  connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput[];
  connect?: BookWhereUniqueInput[];
}

export interface BookUpdateManyWithoutCategoriesInput {
  create?: BookCreateWithoutCategoriesInput[];
  connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput[];
  upsert?: BookUpsertWithWhereUniqueWithoutCategoriesInput[];
  set?: BookWhereUniqueInput[];
  disconnect?: BookWhereUniqueInput[];
  delete?: BookWhereUniqueInput[];
  connect?: BookWhereUniqueInput[];
  update?: BookUpdateWithWhereUniqueWithoutCategoriesInput[];
  updateMany?: BookUpdateManyWithWhereWithoutCategoriesInput[];
  deleteMany?: BookScalarWhereInput[];
}

export interface BookUncheckedUpdateManyWithoutCategoriesInput {
  create?: BookCreateWithoutCategoriesInput[];
  connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput[];
  upsert?: BookUpsertWithWhereUniqueWithoutCategoriesInput[];
  set?: BookWhereUniqueInput[];
  disconnect?: BookWhereUniqueInput[];
  delete?: BookWhereUniqueInput[];
  connect?: BookWhereUniqueInput[];
  update?: BookUpdateWithWhereUniqueWithoutCategoriesInput[];
  updateMany?: BookUpdateManyWithWhereWithoutCategoriesInput[];
  deleteMany?: BookScalarWhereInput[];
}

export interface BookCreateNestedManyWithoutAuthorInput {
  create?: BookCreateWithoutAuthorInput[];
  connectOrCreate?: BookCreateOrConnectWithoutAuthorInput[];
  createMany?: BookCreateManyAuthorInputEnvelope;
  connect?: BookWhereUniqueInput[];
}

export interface BookUncheckedCreateNestedManyWithoutAuthorInput {
  create?: BookCreateWithoutAuthorInput[];
  connectOrCreate?: BookCreateOrConnectWithoutAuthorInput[];
  createMany?: BookCreateManyAuthorInputEnvelope;
  connect?: BookWhereUniqueInput[];
}

export interface BookUpdateManyWithoutAuthorInput {
  create?: BookCreateWithoutAuthorInput[];
  connectOrCreate?: BookCreateOrConnectWithoutAuthorInput[];
  upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: BookCreateManyAuthorInputEnvelope;
  set?: BookWhereUniqueInput[];
  disconnect?: BookWhereUniqueInput[];
  delete?: BookWhereUniqueInput[];
  connect?: BookWhereUniqueInput[];
  update?: BookUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: BookUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: BookScalarWhereInput[];
}

export interface BookUncheckedUpdateManyWithoutAuthorInput {
  create?: BookCreateWithoutAuthorInput[];
  connectOrCreate?: BookCreateOrConnectWithoutAuthorInput[];
  upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: BookCreateManyAuthorInputEnvelope;
  set?: BookWhereUniqueInput[];
  disconnect?: BookWhereUniqueInput[];
  delete?: BookWhereUniqueInput[];
  connect?: BookWhereUniqueInput[];
  update?: BookUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: BookUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: BookScalarWhereInput[];
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedBoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface NestedDateTimeFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: undefined;
  in?: undefined[];
  notIn?: undefined[];
  lt?: undefined;
  lte?: undefined;
  gt?: undefined;
  gte?: undefined;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedFloatWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedFloatFilter;
  _min?: NestedFloatFilter;
  _max?: NestedFloatFilter;
}

export interface NestedEnumLoanStatusFilter {
  equals?: LoanStatus;
  in?: LoanStatus[];
  notIn?: LoanStatus[];
  not?: NestedEnumLoanStatusFilter;
}

export interface NestedEnumLoanStatusWithAggregatesFilter {
  equals?: LoanStatus;
  in?: LoanStatus[];
  notIn?: LoanStatus[];
  not?: NestedEnumLoanStatusWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedEnumLoanStatusFilter;
  _max?: NestedEnumLoanStatusFilter;
}

export interface NestedStringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter;
}

export interface UserLoanCreateWithoutUserInput {
  book: BookCreateNestedOneWithoutUserLoanInput;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface UserLoanUncheckedCreateWithoutUserInput {
  id?: number;
  bookId: number;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface UserLoanCreateOrConnectWithoutUserInput {
  where: UserLoanWhereUniqueInput;
  create: UserLoanUncheckedCreateWithoutUserInput;
}

export interface UserLoanCreateManyUserInputEnvelope {
  data: UserLoanCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface TransactionCreateWithoutUserInput {
  amount: number;
  type: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface TransactionUncheckedCreateWithoutUserInput {
  id?: number;
  amount: number;
  type: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface TransactionCreateOrConnectWithoutUserInput {
  where: TransactionWhereUniqueInput;
  create: TransactionUncheckedCreateWithoutUserInput;
}

export interface TransactionCreateManyUserInputEnvelope {
  data: TransactionCreateManyUserInput;
  skipDuplicates?: boolean;
}

export interface UserLoanUpsertWithWhereUniqueWithoutUserInput {
  where: UserLoanWhereUniqueInput;
  update: UserLoanUncheckedUpdateWithoutUserInput;
  create: UserLoanUncheckedCreateWithoutUserInput;
}

export interface UserLoanUpdateWithWhereUniqueWithoutUserInput {
  where: UserLoanWhereUniqueInput;
  data: UserLoanUncheckedUpdateWithoutUserInput;
}

export interface UserLoanUpdateManyWithWhereWithoutUserInput {
  where: UserLoanScalarWhereInput;
  data: UserLoanUncheckedUpdateManyWithoutUserLoansInput;
}

export interface UserLoanScalarWhereInput {
  AND?: UserLoanScalarWhereInput[];
  OR?: UserLoanScalarWhereInput[];
  NOT?: UserLoanScalarWhereInput[];
  id?: IntFilter;
  userId?: IntFilter;
  bookId?: IntFilter;
  loanExpiredAt?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  price?: IntFilter;
  status?: EnumLoanStatusFilter;
}

export interface TransactionUpsertWithWhereUniqueWithoutUserInput {
  where: TransactionWhereUniqueInput;
  update: TransactionUncheckedUpdateWithoutUserInput;
  create: TransactionUncheckedCreateWithoutUserInput;
}

export interface TransactionUpdateWithWhereUniqueWithoutUserInput {
  where: TransactionWhereUniqueInput;
  data: TransactionUncheckedUpdateWithoutUserInput;
}

export interface TransactionUpdateManyWithWhereWithoutUserInput {
  where: TransactionScalarWhereInput;
  data: TransactionUncheckedUpdateManyWithoutTransactionsInput;
}

export interface TransactionScalarWhereInput {
  AND?: TransactionScalarWhereInput[];
  OR?: TransactionScalarWhereInput[];
  NOT?: TransactionScalarWhereInput[];
  id?: IntFilter;
  amount?: FloatFilter;
  type?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  userId?: IntFilter;
}

export interface UserCreateWithoutTransactionsInput {
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  balance?: number;
  userLoans?: UserLoanCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutTransactionsInput {
  id?: number;
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  balance?: number;
  userLoans?: UserLoanUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutTransactionsInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutTransactionsInput;
}

export interface UserUpsertWithoutTransactionsInput {
  update: UserUncheckedUpdateWithoutTransactionsInput;
  create: UserUncheckedCreateWithoutTransactionsInput;
}

export interface UserUpdateWithoutTransactionsInput {
  email?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  username?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  userLoans?: UserLoanUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutTransactionsInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  username?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  userLoans?: UserLoanUncheckedUpdateManyWithoutUserInput;
}

export interface UserCreateWithoutUserLoansInput {
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  balance?: number;
  transactions?: TransactionCreateNestedManyWithoutUserInput;
}

export interface UserUncheckedCreateWithoutUserLoansInput {
  id?: number;
  email: string;
  name: string;
  username: string;
  password: string;
  address: string;
  isAdmin?: boolean;
  createdAt?: undefined;
  updatedAt?: undefined;
  balance?: number;
  transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput;
}

export interface UserCreateOrConnectWithoutUserLoansInput {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutUserLoansInput;
}

export interface BookCreateWithoutUserLoanInput {
  title: string;
  cover?: string;
  author: AuthorCreateNestedOneWithoutBooksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  categories?: CategoryCreateNestedManyWithoutBooksInput;
}

export interface BookUncheckedCreateWithoutUserLoanInput {
  id?: number;
  title: string;
  cover?: string;
  authorId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
  categories?: CategoryUncheckedCreateNestedManyWithoutBooksInput;
}

export interface BookCreateOrConnectWithoutUserLoanInput {
  where: BookWhereUniqueInput;
  create: BookUncheckedCreateWithoutUserLoanInput;
}

export interface UserUpsertWithoutUserLoansInput {
  update: UserUncheckedUpdateWithoutUserLoansInput;
  create: UserUncheckedCreateWithoutUserLoansInput;
}

export interface UserUpdateWithoutUserLoansInput {
  email?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  username?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  transactions?: TransactionUpdateManyWithoutUserInput;
}

export interface UserUncheckedUpdateWithoutUserLoansInput {
  id?: IntFieldUpdateOperationsInput;
  email?: StringFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  username?: StringFieldUpdateOperationsInput;
  password?: StringFieldUpdateOperationsInput;
  address?: StringFieldUpdateOperationsInput;
  isAdmin?: BoolFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  balance?: FloatFieldUpdateOperationsInput;
  transactions?: TransactionUncheckedUpdateManyWithoutUserInput;
}

export interface BookUpsertWithoutUserLoanInput {
  update: BookUncheckedUpdateWithoutUserLoanInput;
  create: BookUncheckedCreateWithoutUserLoanInput;
}

export interface BookUpdateWithoutUserLoanInput {
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  author?: AuthorUpdateOneRequiredWithoutBooksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  categories?: CategoryUpdateManyWithoutBooksInput;
}

export interface BookUncheckedUpdateWithoutUserLoanInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  categories?: CategoryUncheckedUpdateManyWithoutBooksInput;
}

export interface AuthorCreateWithoutBooksInput {
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorUncheckedCreateWithoutBooksInput {
  id?: number;
  name: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface AuthorCreateOrConnectWithoutBooksInput {
  where: AuthorWhereUniqueInput;
  create: AuthorUncheckedCreateWithoutBooksInput;
}

export interface CategoryCreateWithoutBooksInput {
  name: string;
}

export interface CategoryUncheckedCreateWithoutBooksInput {
  id?: number;
  name: string;
}

export interface CategoryCreateOrConnectWithoutBooksInput {
  where: CategoryWhereUniqueInput;
  create: CategoryUncheckedCreateWithoutBooksInput;
}

export interface UserLoanCreateWithoutBookInput {
  user: UserCreateNestedOneWithoutUserLoansInput;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface UserLoanUncheckedCreateWithoutBookInput {
  id?: number;
  userId: number;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface UserLoanCreateOrConnectWithoutBookInput {
  where: UserLoanWhereUniqueInput;
  create: UserLoanUncheckedCreateWithoutBookInput;
}

export interface UserLoanCreateManyBookInputEnvelope {
  data: UserLoanCreateManyBookInput;
  skipDuplicates?: boolean;
}

export interface AuthorUpsertWithoutBooksInput {
  update: AuthorUncheckedUpdateWithoutBooksInput;
  create: AuthorUncheckedCreateWithoutBooksInput;
}

export interface AuthorUpdateWithoutBooksInput {
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface AuthorUncheckedUpdateWithoutBooksInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface CategoryUpsertWithWhereUniqueWithoutBooksInput {
  where: CategoryWhereUniqueInput;
  update: CategoryUncheckedUpdateWithoutBooksInput;
  create: CategoryUncheckedCreateWithoutBooksInput;
}

export interface CategoryUpdateWithWhereUniqueWithoutBooksInput {
  where: CategoryWhereUniqueInput;
  data: CategoryUncheckedUpdateWithoutBooksInput;
}

export interface CategoryUpdateManyWithWhereWithoutBooksInput {
  where: CategoryScalarWhereInput;
  data: CategoryUncheckedUpdateManyWithoutCategoriesInput;
}

export interface CategoryScalarWhereInput {
  AND?: CategoryScalarWhereInput[];
  OR?: CategoryScalarWhereInput[];
  NOT?: CategoryScalarWhereInput[];
  id?: IntFilter;
  name?: StringFilter;
}

export interface UserLoanUpsertWithWhereUniqueWithoutBookInput {
  where: UserLoanWhereUniqueInput;
  update: UserLoanUncheckedUpdateWithoutBookInput;
  create: UserLoanUncheckedCreateWithoutBookInput;
}

export interface UserLoanUpdateWithWhereUniqueWithoutBookInput {
  where: UserLoanWhereUniqueInput;
  data: UserLoanUncheckedUpdateWithoutBookInput;
}

export interface UserLoanUpdateManyWithWhereWithoutBookInput {
  where: UserLoanScalarWhereInput;
  data: UserLoanUncheckedUpdateManyWithoutUserLoanInput;
}

export interface BookCreateWithoutCategoriesInput {
  title: string;
  cover?: string;
  author: AuthorCreateNestedOneWithoutBooksInput;
  createdAt?: undefined;
  updatedAt?: undefined;
  UserLoan?: UserLoanCreateNestedManyWithoutBookInput;
}

export interface BookUncheckedCreateWithoutCategoriesInput {
  id?: number;
  title: string;
  cover?: string;
  authorId: number;
  createdAt?: undefined;
  updatedAt?: undefined;
  UserLoan?: UserLoanUncheckedCreateNestedManyWithoutBookInput;
}

export interface BookCreateOrConnectWithoutCategoriesInput {
  where: BookWhereUniqueInput;
  create: BookUncheckedCreateWithoutCategoriesInput;
}

export interface BookUpsertWithWhereUniqueWithoutCategoriesInput {
  where: BookWhereUniqueInput;
  update: BookUncheckedUpdateWithoutCategoriesInput;
  create: BookUncheckedCreateWithoutCategoriesInput;
}

export interface BookUpdateWithWhereUniqueWithoutCategoriesInput {
  where: BookWhereUniqueInput;
  data: BookUncheckedUpdateWithoutCategoriesInput;
}

export interface BookUpdateManyWithWhereWithoutCategoriesInput {
  where: BookScalarWhereInput;
  data: BookUncheckedUpdateManyWithoutBooksInput;
}

export interface BookScalarWhereInput {
  AND?: BookScalarWhereInput[];
  OR?: BookScalarWhereInput[];
  NOT?: BookScalarWhereInput[];
  id?: IntFilter;
  title?: StringFilter;
  cover?: StringNullableFilter;
  authorId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}

export interface BookCreateWithoutAuthorInput {
  title: string;
  cover?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  categories?: CategoryCreateNestedManyWithoutBooksInput;
  UserLoan?: UserLoanCreateNestedManyWithoutBookInput;
}

export interface BookUncheckedCreateWithoutAuthorInput {
  id?: number;
  title: string;
  cover?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
  categories?: CategoryUncheckedCreateNestedManyWithoutBooksInput;
  UserLoan?: UserLoanUncheckedCreateNestedManyWithoutBookInput;
}

export interface BookCreateOrConnectWithoutAuthorInput {
  where: BookWhereUniqueInput;
  create: BookUncheckedCreateWithoutAuthorInput;
}

export interface BookCreateManyAuthorInputEnvelope {
  data: BookCreateManyAuthorInput;
  skipDuplicates?: boolean;
}

export interface BookUpsertWithWhereUniqueWithoutAuthorInput {
  where: BookWhereUniqueInput;
  update: BookUncheckedUpdateWithoutAuthorInput;
  create: BookUncheckedCreateWithoutAuthorInput;
}

export interface BookUpdateWithWhereUniqueWithoutAuthorInput {
  where: BookWhereUniqueInput;
  data: BookUncheckedUpdateWithoutAuthorInput;
}

export interface BookUpdateManyWithWhereWithoutAuthorInput {
  where: BookScalarWhereInput;
  data: BookUncheckedUpdateManyWithoutBooksInput;
}

export interface UserLoanCreateManyUserInput {
  id?: number;
  bookId: number;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface TransactionCreateManyUserInput {
  id?: number;
  amount: number;
  type: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface UserLoanUpdateWithoutUserInput {
  book?: BookUpdateOneRequiredWithoutUserLoanInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface UserLoanUncheckedUpdateWithoutUserInput {
  id?: IntFieldUpdateOperationsInput;
  bookId?: IntFieldUpdateOperationsInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface UserLoanUncheckedUpdateManyWithoutUserLoansInput {
  id?: IntFieldUpdateOperationsInput;
  bookId?: IntFieldUpdateOperationsInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface TransactionUpdateWithoutUserInput {
  amount?: FloatFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface TransactionUncheckedUpdateWithoutUserInput {
  id?: IntFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface TransactionUncheckedUpdateManyWithoutTransactionsInput {
  id?: IntFieldUpdateOperationsInput;
  amount?: FloatFieldUpdateOperationsInput;
  type?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface UserLoanCreateManyBookInput {
  id?: number;
  userId: number;
  loanExpiredAt: undefined;
  createdAt?: undefined;
  updatedAt?: undefined;
  price?: number;
  status?: LoanStatus;
}

export interface CategoryUpdateWithoutBooksInput {
  name?: StringFieldUpdateOperationsInput;
}

export interface CategoryUncheckedUpdateWithoutBooksInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface CategoryUncheckedUpdateManyWithoutCategoriesInput {
  id?: IntFieldUpdateOperationsInput;
  name?: StringFieldUpdateOperationsInput;
}

export interface UserLoanUpdateWithoutBookInput {
  user?: UserUpdateOneRequiredWithoutUserLoansInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface UserLoanUncheckedUpdateWithoutBookInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface UserLoanUncheckedUpdateManyWithoutUserLoanInput {
  id?: IntFieldUpdateOperationsInput;
  userId?: IntFieldUpdateOperationsInput;
  loanExpiredAt?: DateTimeFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  price?: IntFieldUpdateOperationsInput;
  status?: EnumLoanStatusFieldUpdateOperationsInput;
}

export interface BookUpdateWithoutCategoriesInput {
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  author?: AuthorUpdateOneRequiredWithoutBooksInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  UserLoan?: UserLoanUpdateManyWithoutBookInput;
}

export interface BookUncheckedUpdateWithoutCategoriesInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  UserLoan?: UserLoanUncheckedUpdateManyWithoutBookInput;
}

export interface BookUncheckedUpdateManyWithoutBooksInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  authorId?: IntFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}

export interface BookCreateManyAuthorInput {
  id?: number;
  title: string;
  cover?: string;
  createdAt?: undefined;
  updatedAt?: undefined;
}

export interface BookUpdateWithoutAuthorInput {
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  categories?: CategoryUpdateManyWithoutBooksInput;
  UserLoan?: UserLoanUpdateManyWithoutBookInput;
}

export interface BookUncheckedUpdateWithoutAuthorInput {
  id?: IntFieldUpdateOperationsInput;
  title?: StringFieldUpdateOperationsInput;
  cover?: NullableStringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
  categories?: CategoryUncheckedUpdateManyWithoutBooksInput;
  UserLoan?: UserLoanUncheckedUpdateManyWithoutBookInput;
}

export interface AggregateUser {
  _count: Maybe<UserCountAggregateOutputType>;
  _avg: Maybe<UserAvgAggregateOutputType>;
  _sum: Maybe<UserSumAggregateOutputType>;
  _min: Maybe<UserMinAggregateOutputType>;
  _max: Maybe<UserMaxAggregateOutputType>;
}

export interface AggregateTransaction {
  _count: Maybe<TransactionCountAggregateOutputType>;
  _avg: Maybe<TransactionAvgAggregateOutputType>;
  _sum: Maybe<TransactionSumAggregateOutputType>;
  _min: Maybe<TransactionMinAggregateOutputType>;
  _max: Maybe<TransactionMaxAggregateOutputType>;
}

export interface AggregateUserLoan {
  _count: Maybe<UserLoanCountAggregateOutputType>;
  _avg: Maybe<UserLoanAvgAggregateOutputType>;
  _sum: Maybe<UserLoanSumAggregateOutputType>;
  _min: Maybe<UserLoanMinAggregateOutputType>;
  _max: Maybe<UserLoanMaxAggregateOutputType>;
}

export interface AggregateBook {
  _count: Maybe<BookCountAggregateOutputType>;
  _avg: Maybe<BookAvgAggregateOutputType>;
  _sum: Maybe<BookSumAggregateOutputType>;
  _min: Maybe<BookMinAggregateOutputType>;
  _max: Maybe<BookMaxAggregateOutputType>;
}

export interface AggregateCategory {
  _count: Maybe<CategoryCountAggregateOutputType>;
  _avg: Maybe<CategoryAvgAggregateOutputType>;
  _sum: Maybe<CategorySumAggregateOutputType>;
  _min: Maybe<CategoryMinAggregateOutputType>;
  _max: Maybe<CategoryMaxAggregateOutputType>;
}

export interface AggregateAuthor {
  _count: Maybe<AuthorCountAggregateOutputType>;
  _avg: Maybe<AuthorAvgAggregateOutputType>;
  _sum: Maybe<AuthorSumAggregateOutputType>;
  _min: Maybe<AuthorMinAggregateOutputType>;
  _max: Maybe<AuthorMaxAggregateOutputType>;
}

export interface UserCountOutputType {
  userLoans: number;
  transactions: number;
}

export interface UserCountAggregateOutputType {
  id: number;
  email: number;
  name: number;
  username: number;
  password: number;
  address: number;
  isAdmin: number;
  createdAt: number;
  updatedAt: number;
  balance: number;
  _all: number;
}

export interface UserAvgAggregateOutputType {
  id: Maybe<number>;
  balance: Maybe<number>;
}

export interface UserSumAggregateOutputType {
  id: Maybe<number>;
  balance: Maybe<number>;
}

export interface UserMinAggregateOutputType {
  id: Maybe<number>;
  email: Maybe<string>;
  name: Maybe<string>;
  username: Maybe<string>;
  password: Maybe<string>;
  address: Maybe<string>;
  isAdmin: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  balance: Maybe<number>;
}

export interface UserMaxAggregateOutputType {
  id: Maybe<number>;
  email: Maybe<string>;
  name: Maybe<string>;
  username: Maybe<string>;
  password: Maybe<string>;
  address: Maybe<string>;
  isAdmin: Maybe<boolean>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  balance: Maybe<number>;
}

export interface TransactionCountAggregateOutputType {
  id: number;
  amount: number;
  type: number;
  createdAt: number;
  updatedAt: number;
  userId: number;
  _all: number;
}

export interface TransactionAvgAggregateOutputType {
  id: Maybe<number>;
  amount: Maybe<number>;
  userId: Maybe<number>;
}

export interface TransactionSumAggregateOutputType {
  id: Maybe<number>;
  amount: Maybe<number>;
  userId: Maybe<number>;
}

export interface TransactionMinAggregateOutputType {
  id: Maybe<number>;
  amount: Maybe<number>;
  type: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  userId: Maybe<number>;
}

export interface TransactionMaxAggregateOutputType {
  id: Maybe<number>;
  amount: Maybe<number>;
  type: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  userId: Maybe<number>;
}

export interface UserLoanCountAggregateOutputType {
  id: number;
  userId: number;
  bookId: number;
  loanExpiredAt: number;
  createdAt: number;
  updatedAt: number;
  price: number;
  status: number;
  _all: number;
}

export interface UserLoanAvgAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
  bookId: Maybe<number>;
  price: Maybe<number>;
}

export interface UserLoanSumAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
  bookId: Maybe<number>;
  price: Maybe<number>;
}

export interface UserLoanMinAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
  bookId: Maybe<number>;
  loanExpiredAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  price: Maybe<number>;
  status: Maybe<LoanStatus>;
}

export interface UserLoanMaxAggregateOutputType {
  id: Maybe<number>;
  userId: Maybe<number>;
  bookId: Maybe<number>;
  loanExpiredAt: Maybe<undefined>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
  price: Maybe<number>;
  status: Maybe<LoanStatus>;
}

export interface BookCountOutputType {
  categories: number;
  UserLoan: number;
}

export interface BookCountAggregateOutputType {
  id: number;
  title: number;
  cover: number;
  authorId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface BookAvgAggregateOutputType {
  id: Maybe<number>;
  authorId: Maybe<number>;
}

export interface BookSumAggregateOutputType {
  id: Maybe<number>;
  authorId: Maybe<number>;
}

export interface BookMinAggregateOutputType {
  id: Maybe<number>;
  title: Maybe<string>;
  cover: Maybe<string>;
  authorId: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface BookMaxAggregateOutputType {
  id: Maybe<number>;
  title: Maybe<string>;
  cover: Maybe<string>;
  authorId: Maybe<number>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface CategoryCountOutputType {
  books: number;
}

export interface CategoryCountAggregateOutputType {
  id: number;
  name: number;
  _all: number;
}

export interface CategoryAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface CategorySumAggregateOutputType {
  id: Maybe<number>;
}

export interface CategoryMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
}

export interface CategoryMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
}

export interface AuthorCountOutputType {
  books: number;
}

export interface AuthorCountAggregateOutputType {
  id: number;
  name: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
}

export interface AuthorAvgAggregateOutputType {
  id: Maybe<number>;
}

export interface AuthorSumAggregateOutputType {
  id: Maybe<number>;
}

export interface AuthorMinAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface AuthorMaxAggregateOutputType {
  id: Maybe<number>;
  name: Maybe<string>;
  createdAt: Maybe<undefined>;
  updatedAt: Maybe<undefined>;
}

export interface findUniqueAuthorArgs {
  where: AuthorWhereUniqueInput;
}

export interface findFirstAuthorArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AuthorScalarFieldEnum[];
}

export interface findManyAuthorArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AuthorScalarFieldEnum[];
}

export interface findManyAuthorCountArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: AuthorScalarFieldEnum[];
}

export interface aggregateAuthorArgs {
  where?: AuthorWhereInput;
  orderBy?: AuthorOrderByWithRelationInput[];
  cursor?: AuthorWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueCategoryArgs {
  where: CategoryWhereUniqueInput;
}

export interface findFirstCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoryScalarFieldEnum[];
}

export interface findManyCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoryScalarFieldEnum[];
}

export interface findManyCategoryCountArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CategoryScalarFieldEnum[];
}

export interface aggregateCategoryArgs {
  where?: CategoryWhereInput;
  orderBy?: CategoryOrderByWithRelationInput[];
  cursor?: CategoryWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueBookArgs {
  where: BookWhereUniqueInput;
}

export interface findFirstBookArgs {
  where?: BookWhereInput;
  orderBy?: BookOrderByWithRelationInput[];
  cursor?: BookWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: BookScalarFieldEnum[];
}

export interface findManyBookArgs {
  where?: BookWhereInput;
  orderBy?: BookOrderByWithRelationInput[];
  cursor?: BookWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: BookScalarFieldEnum[];
}

export interface findManyBookCountArgs {
  where?: BookWhereInput;
  orderBy?: BookOrderByWithRelationInput[];
  cursor?: BookWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: BookScalarFieldEnum[];
}

export interface aggregateBookArgs {
  where?: BookWhereInput;
  orderBy?: BookOrderByWithRelationInput[];
  cursor?: BookWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueUserLoanArgs {
  where: UserLoanWhereUniqueInput;
}

export interface findFirstUserLoanArgs {
  where?: UserLoanWhereInput;
  orderBy?: UserLoanOrderByWithRelationInput[];
  cursor?: UserLoanWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserLoanScalarFieldEnum[];
}

export interface findManyUserLoanArgs {
  where?: UserLoanWhereInput;
  orderBy?: UserLoanOrderByWithRelationInput[];
  cursor?: UserLoanWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserLoanScalarFieldEnum[];
}

export interface findManyUserLoanCountArgs {
  where?: UserLoanWhereInput;
  orderBy?: UserLoanOrderByWithRelationInput[];
  cursor?: UserLoanWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserLoanScalarFieldEnum[];
}

export interface aggregateUserLoanArgs {
  where?: UserLoanWhereInput;
  orderBy?: UserLoanOrderByWithRelationInput[];
  cursor?: UserLoanWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueTransactionArgs {
  where: TransactionWhereUniqueInput;
}

export interface findFirstTransactionArgs {
  where?: TransactionWhereInput;
  orderBy?: TransactionOrderByWithRelationInput[];
  cursor?: TransactionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TransactionScalarFieldEnum[];
}

export interface findManyTransactionArgs {
  where?: TransactionWhereInput;
  orderBy?: TransactionOrderByWithRelationInput[];
  cursor?: TransactionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TransactionScalarFieldEnum[];
}

export interface findManyTransactionCountArgs {
  where?: TransactionWhereInput;
  orderBy?: TransactionOrderByWithRelationInput[];
  cursor?: TransactionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TransactionScalarFieldEnum[];
}

export interface aggregateTransactionArgs {
  where?: TransactionWhereInput;
  orderBy?: TransactionOrderByWithRelationInput[];
  cursor?: TransactionWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface findUniqueUserArgs {
  where: UserWhereUniqueInput;
}

export interface findFirstUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface findManyUserCountArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface aggregateUserArgs {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
}

export interface createOneAuthorArgs {
  data: AuthorCreateInput;
}

export interface updateOneAuthorArgs {
  data: AuthorUpdateInput;
  where: AuthorWhereUniqueInput;
}

export interface upsertOneAuthorArgs {
  where: AuthorWhereUniqueInput;
  create: AuthorCreateInput;
  update: AuthorUpdateInput;
}

export interface deleteOneAuthorArgs {
  where: AuthorWhereUniqueInput;
}

export interface updateManyAuthorArgs {
  data: AuthorUpdateManyMutationInput;
  where?: AuthorWhereInput;
}

export interface deleteManyAuthorArgs {
  where?: AuthorWhereInput;
}

export interface createOneCategoryArgs {
  data: CategoryCreateInput;
}

export interface updateOneCategoryArgs {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
}

export interface upsertOneCategoryArgs {
  where: CategoryWhereUniqueInput;
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
}

export interface deleteOneCategoryArgs {
  where: CategoryWhereUniqueInput;
}

export interface updateManyCategoryArgs {
  data: CategoryUpdateManyMutationInput;
  where?: CategoryWhereInput;
}

export interface deleteManyCategoryArgs {
  where?: CategoryWhereInput;
}

export interface createOneBookArgs {
  data: BookCreateInput;
}

export interface updateOneBookArgs {
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
}

export interface upsertOneBookArgs {
  where: BookWhereUniqueInput;
  create: BookCreateInput;
  update: BookUpdateInput;
}

export interface deleteOneBookArgs {
  where: BookWhereUniqueInput;
}

export interface updateManyBookArgs {
  data: BookUpdateManyMutationInput;
  where?: BookWhereInput;
}

export interface deleteManyBookArgs {
  where?: BookWhereInput;
}

export interface createOneUserLoanArgs {
  data: UserLoanCreateInput;
}

export interface updateOneUserLoanArgs {
  data: UserLoanUpdateInput;
  where: UserLoanWhereUniqueInput;
}

export interface upsertOneUserLoanArgs {
  where: UserLoanWhereUniqueInput;
  create: UserLoanCreateInput;
  update: UserLoanUpdateInput;
}

export interface deleteOneUserLoanArgs {
  where: UserLoanWhereUniqueInput;
}

export interface updateManyUserLoanArgs {
  data: UserLoanUpdateManyMutationInput;
  where?: UserLoanWhereInput;
}

export interface deleteManyUserLoanArgs {
  where?: UserLoanWhereInput;
}

export interface createOneTransactionArgs {
  data: TransactionCreateInput;
}

export interface updateOneTransactionArgs {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
}

export interface upsertOneTransactionArgs {
  where: TransactionWhereUniqueInput;
  create: TransactionCreateInput;
  update: TransactionUpdateInput;
}

export interface deleteOneTransactionArgs {
  where: TransactionWhereUniqueInput;
}

export interface updateManyTransactionArgs {
  data: TransactionUpdateManyMutationInput;
  where?: TransactionWhereInput;
}

export interface deleteManyTransactionArgs {
  where?: TransactionWhereInput;
}

export interface createOneUserArgs {
  data: UserCreateInput;
}

export interface updateOneUserArgs {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface upsertOneUserArgs {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
}

export interface deleteOneUserArgs {
  where: UserWhereUniqueInput;
}

export interface updateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
}

export interface deleteManyUserArgs {
  where?: UserWhereInput;
}
