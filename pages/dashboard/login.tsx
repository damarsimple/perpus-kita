//@ts-nocheck
import { gql, useQuery } from "@apollo/client";
import React, { ReactNode, useState } from "react";
import Button from "../../components/Button";
import { User } from "../../generated";
import { GET_USERS, LOGIN } from "../../graphql/queries";

export default function login() {
  // async function handleForm(e: any) {
  //   e.preventDefault();
  //   const emailUser = e.target.email.value;
  //   const passUser = e.target.pass.value;

  //   // onLogin(email, pass);

  //   if (dataLogin?.findManyUser && dataLogin?.findManyUser.length > 0) {
  //     console.log("ada");
  //   } else {
  //     console.log("Tidak ada");
  //   }
  // }
  // if (!dataLogin || !dataLogin.findManyUser) throw Error("Login Failed");

  // if (!dataLogin.findManyUser.id || !data.login.token) throw Error(data.login.message ?? "Login Failed");

  // set({
  //     token: data.login.token,
  //     user: data.login.user
  // })

  // })

  // set({ token })
  // },

  // }

  // const { data: dataLogin } = useQuery<{ findManyUser: User[] }>(LOGIN, {
  //   onCompleted: () => {
  //     if (dataLogin?.findManyUser && dataLogin?.findManyUser.length > 0) {
  //       console.log("ada");
  //     } else {
  //       console.log("Tidak ada");
  //     }
  //   },
  // });

  // const onLogin = (emailUser: string, passUser: string) => {
  //   dataLogin?({
  //     variables: {
  //       where: {
  //         AND: [
  //           {
  //             email: {
  //               equals: emailUser,
  //             },
  //             password: {
  //               equals: passUser,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   })
  // };

  // if (dataLogin?dataLogin?.findManyUser.length > 0) {

  // const {
  //   loading,
  //   error,
  //   data: dataLogin,
  // } = useQuery<{ findManyUser: User[] }>(LOGIN, {
  //   where: {
  //     AND: [
  //       {
  //         email: {
  //           equals: email,
  //         },
  //         password: {
  //           equals: pass,
  //         },
  //       },
  //     ],
  //   },
  // onCompleted: () => {
  //   document.cookie = "token={id};path=/";
  // },
  //   });
  const [failedMessage, setFailedMessage] = useState("");

  const { setUser } = useUserStore();
  const { push } = useRouter();
  const handleForm = () => {
    interface AuthPayload {
      token?: string;
      message?: string;
      success: boolean;
      user?: User;
    }

    const emailUser = e.target.email.value;
    const passUser = e.target.pass.value;

  //   client
  //     .mutate<{ login: AuthPayload }>({
  //       mutation: gql`mutation Register($email: String!, $password: String!) {
  //         login(email: $email, password: $password) {
  //           token
  //           status
  //           message
  //           user {
  //             id
  //           }
  //         }
  //       }`,
  //       variables: {
  //         email: emailUser,
  //         password:passUser,
  //     }).then((e) => {
  //       if (e.data?.login.success) {
  //         setUser(e?.data.login?.user ?? null);
  //         push("/dashboard");
  //       } else {
  //         setFailedMessage(e?.data?.login?.message ?? "");
  //       }
  //     });
  // };

  return (
    <div className="flex justify-center text-center my-auto items-center ">
      <div className="bg-green-400 w-full h-screen mx-auto">
        <div className="mx-auto ">
          <img className="mx-auto" src="/admin.svg" />
        </div>
      </div>
      <div className="bg-slate-100 w-full h-screen text-center ">
        <div className="mt-32">
          <h1 className="text-4xl font-semibold">Login</h1>
          <p className="text-gray-500 mb-10">
            Please enter your account username and password.
          </p>
          <form>
            <p className="mb-3">Email</p>
            <input
              type="text"
              name="email"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-28 mb-4"
            />
            <p className="mb-3">Password</p>
            <input
              type="password"
              name="pass"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-28 mb-8"
            />
            <div className="">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Save
              </button>
              {/* <Button px={186} submit="submit">
                Login
              </Button> */}
              <div className="mb-4"></div>
              <Button px={150} bType="outlined">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
