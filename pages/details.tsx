import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

// interface DetailsProp {
//   id: string;
//   title: string;
//   auth: string;
//   cover: string;
// }

export default function Details() {
  const router = useRouter();
  const { id, title, cover, auth } = router.query;

  return (
    <div>
      <Navbar></Navbar>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={""}
              layout={"fill"}
              alt=""
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm  text-gray-700 tracking-widest">{auth}</h2>
              <h1 className="text-gray-900 text-4xl font-bold mb-1">{title}</h1>
              <div className="flex mb-4">
                <span className=" font-normal text-base text-gray-700">
                  {" "}
                  Stok <strong>158</strong>
                </span>
              </div>
              <p className="leading-relaxed mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                blanditiis ipsa ipsum quae quia quos saepe totam? Aliquam
                deleniti mollitia reiciendis totam! Ad blanditiis dolorum et
                molestias praesentium saepe voluptates.
              </p>
              <Button px={100}>apply for a loan</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
