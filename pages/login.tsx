import React from "react";
import Button from "../components/Button";

export default function login() {
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

          <div className="">
            <p className="mb-3">Username</p>
            <input
              type="text"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-28 mb-4"
            />
            <p className="mb-3">Password</p>
            <input
              type="password"
              className=" rounded-xl bg-white border-0 shadow-md py-1 px-28 mb-8"
            />
            <div className="">
              <Button px={186} link="/dashboard">
                Submit
              </Button>
              <div className="mb-4"></div>
              <Button px={150} type="outlined">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
