import Link from "next/link";
import React from "react";
import Dashboard from "../components/Dashboard";

export default function dashboard() {
  return (
    <div>
      <div className="flex flex-row h-screen">
        <Dashboard />
        <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
          <img className="mx-auto my-auto" src="/Find.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
