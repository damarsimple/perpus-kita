import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Team() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center mb-10">
        <h1 className="text-gray-600 text-6xl font-semibold my-10">
          Our Dream <span className="text-green-500">Team</span>
        </h1>
        <Image src={"/tim.svg"} width={1000} height={700}></Image>
      </div>
      <Footer></Footer>
    </div>
  );
}
