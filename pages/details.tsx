import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function details() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="bookHooked.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm  text-gray-700 tracking-widest">Author</h2>
              <h1 className="text-gray-900 text-4xl font-bold mb-1">
                Book Tittle
              </h1>
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
