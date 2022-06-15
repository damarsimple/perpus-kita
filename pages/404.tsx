import Link from "next/link";
import React from "react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div>
      <div className="w-4/12 mx-auto mt-6">
        <img className="mx-auto" src="/Find.svg" alt="" />
      </div>
      <div className="font-normal text-3xl text-center text-gray-500">
        <p>400</p>
        <h1 className="font-semibold text-5xl">
          Page <span className="text-green-400"> Not Found</span>
        </h1>
      </div>
      <div className="font-normal text-center text-gray-400 mt-2">
        <p>Sorry, we don't want this to happen either</p>
      </div>
      <div className="text-center mt-6">
        <Button px={120} link="/">
          Home
        </Button>
      </div>
    </div>
  );
}
