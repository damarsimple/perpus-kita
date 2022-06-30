import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  const { pathname, push } = useRouter();
  return (
    <nav className="flex gap-3 px-10 py-5 justify-between items-center">
      <h1 className="font-semibold text-2xl mr-10">
        <span className="text-green-400 font-extrabold ">PERPUS</span>
        <span className="text-gray-700">kita</span>
      </h1>

      <div className="flex ">
        <div className="flex gap-3 items-center">
          {[
            { name: "Home", route: "/" },
            { name: "Find Your Book", route: "/find" },
            { name: "About Us", route: "/about" },
          ].map((e) => (
            <Link key={e.name} href={e.route}>
              <a
                className={
                  "mx-2 text-lg font-normal" +
                  (pathname == e.route ? " text-green-400 " : "")
                }
              >
                {e.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="flex ml-12">
          <Button link="./dashboard/login" px={20}>
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}
