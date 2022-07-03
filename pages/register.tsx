//@ts-nocheck
import { gql, useMutation, useQuery } from "@apollo/client";
import React, { ReactNode, useState } from "react";
import Button from "../components/Button";
import { User } from "../generated";
import { GET_USERS, LOGIN } from "../graphql/queries";
import Link from "next/link";
import { useUserStore } from "../components/userStore";
import { useRouter } from "next/router";

interface AuthPayload {
  token?: string;
  message?: string;
  user?: User;
  status: boolean;
}

export default function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUserStore();
  const [handleRegister, { loading, error }] = useMutation<{
    register: AuthPayload;
  }>(gql`
    mutation Register(
      $name: String!
      $address: String!
      $email: String!
      $password: String!
      $username: String!
    ) {
      register(
        name: $name
        address: $address
        email: $email
        password: $password
        username: $username
      ) {
        token
        status
        message
        user {
          id
          email
          name
          username
          password
          address
          isAdmin
        }
      }
    }
  `);
  const { push } = useRouter();
  const handle = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const add = e.target.add.value;
    const email = e.target.email.value;
    const user = e.target.user.value;
    const pass = e.target.pass.value;
    handleRegister({
      variables: {
        name: name,
        address: add,
        email: email,
        password: pass,
        username: user,
      },
    }).then((e) => {
      console.log(e);
      if (e.data?.register.status) {
        setUser(e.data.register.user);
        push("/dashboard");
      } else {
        setErrorMessage(e.data?.register.message);
      }
    });
  };

  return (
    <div className="flex justify-center text-center my-auto items-center  ">
      {errorMessage}
      <div className="bg-green-400 w-full h-screen mx-auto self-center">
        <div className="mx-auto ">
          <img              alt="" className="mx-auto" src="/admin.svg" />
        </div>
      </div>
      <div className="bg-slate-100 w-full h-screen text-center self-center overflow-auto">
        <div className="my-10">
          <h1 className="text-4xl font-semibold">Create Account</h1>
          <p className="text-gray-500 mb-10">
            Please enter your account username and password.
          </p>
          <form onSubmit={handle} method="post">
            <p className="mb-1">Name</p>
            <input
              type="text"
              name="name"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-20 mb-3"
            />
            <p className="mb-1">Username</p>
            <input
              type="text"
              name="user"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-20 mb-3"
            />
            <p className="mb-1">Email</p>
            <input
              type="text"
              name="email"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-20 mb-3"
            />
            <p className="mb-1">Password</p>
            <input
              type="password"
              name="pass"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-20 mb-3"
            />
            <p className="mb-1">Addres</p>
            <input
              type="text"
              name="add"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-20 mb-8"
            />
            <div className="">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center border border-transparent bg-green-400 px-40 rounded-xl py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {loading ? "loading..." : "Register"}
              </button>
              <div className="mb-4"></div>
              <Link href="/login">
                <button
                  type="button"
                  className="inline-flex justify-center border border-transparent bg-gray-200 px-40 rounded-xl py-2 text-sm font-medium text-black hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
