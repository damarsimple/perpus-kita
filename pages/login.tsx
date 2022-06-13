import React from "react";
import Button from "../components/Button";

export default function login() {
  return (
    <div className="flex justify-center text-center my-auto items-center ">
      <div className="bg-green-400 w-full h-screen mx-auto">
        <div className="mx-auto">
          <img src="/admin.svg" />
        </div>
      </div>
      <div className="bg-gray-50 w-full h-screen text-center ">
        <div className="mt-32">
          <h1 className="text-4xl font-semibold">Login</h1>
          <p className="text-gray-500 mb-10">Please enter your account username and password.</p>

          <div className="">
            <p className="mb-3">Username</p>
            <input type="text" className=" rounded-xl bg-slate-200 border-0 py-1 px-28 mb-4" />
            <p className="mb-3">Password</p>
            <input type="password" className=" rounded-xl bg-slate-200 border-0 py-1 px-28 mb-8" />
            <div className="">
              <Button px="44" link="/dashboard">
                Submit
              </Button>
              <div className="mb-4"></div>
              <Button px="36" type="outlined">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
