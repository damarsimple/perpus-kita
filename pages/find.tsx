import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import CardBook from "../components/CardBook";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Find() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <section>
          <h1 className="mt-16 font-semibold text-3xl text-gray-700 text-center">
            Find Your Favorite <span className="text-green-400"> Book</span> Now
          </h1>
          <div className="flex justify-center items-center mt-5">
            <input type="text" className="py-1 px-32 rounded-xl border-green-600 text-gray-700" />
            <div className="h-full ml-4">
              <Link href="#">
                <Button px={20}>Search</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="grid grid-rows-1 grid-cols-4 gap-0">
            {[
              {
                name: "Hooked",
                image: "/bookHooked.jpg",
                deskripsi: "Buku Oke.",
                author: "Jenal",
              },
              {
                name: "The Power of Habit",
                image: "/bookHooked.jpg",
                deskripsi: "Buku Bagus.",
                author: "Jenal",
              },
              {
                name: "Atomic Habit",
                image: "/bookHooked.jpg",
                deskripsi: "Buku Keren.",
                author: "Jenal",
              },
              {
                name: "Hooked",
                image: "/bookHooked.jpg",
                deskripsi: "Buku Oke.",
                author: "Jenal",
              },
              {
                name: "The Power of Habit",
                image: "/bookHooked.jpg",
                deskripsi: "Buku Bagus.",
                author: "Jenal",
              },
              {
                name: "Atomic Habit",
                image: "/bookHooked.jpg",
                deskripsi: "Buku Keren.",
                author: "Jenal",
              },
            ].map((e) => (
              <div className="mb-10" key={e.name}>
                <CardBook image={e.image} deskripsi={e.deskripsi} author={e.author}>
                  {e.name}
                </CardBook>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-5">
        <Footer />
      </section>
    </div>
  );
}
