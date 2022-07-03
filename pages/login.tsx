//@ts-nocheck
import { gql, useMutation, useQuery } from "@apollo/client";
import React, { ReactNode, useState } from "react";
import Button from "../components/Button";
import { User } from "../generated";
import { GET_USERS, LOGIN } from "../graphql/queries";
import { useUserStore } from "../components/userStore";
import Link from "next/link";
import { useRouter } from "next/router";

interface AuthPayload {
  token?: string;
  message?: string;
  user?: User;
  status: boolean;
}

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUserStore();

  const [handleLogin, { loading, error }] = useMutation<{
    login: AuthPayload;
  }>(gql`
    mutation Mutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
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
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    handleLogin({
      variables: {
        email: email,
        password: pass,
      },
    }).then((e) => {
      console.log(e);
      if (e.data?.login.status) {
        setUser(e.data.login.user);
        push("/dashboard");
      } else {
        setErrorMessage(e.data?.login.message);
      }
    });
  };

  return (
    <div className="flex justify-center text-center my-auto self-center overflow-hidden">
      <div className="bg-green-400 w-full h-screen mx-auto self-center">
        <div className="mx-auto ">
          <img className="mx-auto" src="/admin.svg" />
        </div>
      </div>
      <div className="bg-slate-100 w-full h-screen text-center self-center overflow-hidden ">
        <div className="pt-32">
          <h1 className="text-4xl font-semibold">Login</h1>
          <p className="text-gray-500 mb-4">
            Please enter your account username and password.
          </p>
          <p className="text-red-500">{errorMessage}</p>
          <form onSubmit={handle} method="post">
            <p className="mb-3">Email</p>
            <input
              type="text"
              name="email"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-20 mb-4"
            />
            <p className="mb-3">Password</p>
            <input
              type="password"
              name="pass"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-20 mb-8"
            />
            <div className="">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center border border-transparent bg-green-400 px-40 rounded-xl py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {loading ? "loading..." : "Login"}
              </button>
              <div className="mb-4"></div>
              <Link href="/register">
                <button
                  type="button"
                  className="inline-flex justify-center border border-transparent bg-gray-200 px-36 rounded-xl py-2 text-sm font-medium text-black hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
