import { gql, useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { title } from "process";
import { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Middleware from "../components/Middleware";
import Navbar from "../components/Navbar";
import { Book, findManyBookCountArgs } from "../generated";
import ValidLoginModal from "../modals/ValidLoginModal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { pathname, push } = useRouter();
  let [isOpen, setIsOpen] = useState(true);

  const EXCHANGE_RATES = gql`
    query Query($take: Int) {
      findManyBook(take: $take) {
        title
        author {
          name
        }
        id
      }
    }
  `;

  const BOOK_COUNT = gql`
    query FindManyBook {
      findManyBookCount
    }
  `;

  const { data } = useQuery<{ findManyBook: Book[] }>(EXCHANGE_RATES);

  type count = number;

  const {
    loading,
    error,
    data: BookCount,
  } = useQuery<{ findManyBookCount: count }>(BOOK_COUNT);

  if (loading)
    return (
      <div className=" h-screen text-center  align-middle">
        <p className="text-3xl font-semibold text-green-400">
          PERPUS<span className="text-gray-600 text-xl">kita</span>
        </p>
        <p className="text-gray-400 text-xl">Loading...</p>
      </div>
    );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <Navbar />
      <section>
        <div className="text-center flex flex-col gap-3 justify-center mt-11">
          <h3 className="font-bold text-6xl text-gray-700 leading-10">
            Let&apos;s Increase Your
            <span className="text-green-400"> Knowledge</span>
            <br />
            <span className="text-4xl ">Wherever You Are</span>
          </h3>

          <p className="text-gray-400">
            Find your favorite book wherever you are and we will send your
            favorite book.
          </p>

          <div className="flex gap-3 justify-center">
            <Link href="#">
              <Button color="red" px={20}>
                Get Started
              </Button>
            </Link>
            <Link href="#">
              <Button bType="outlined" px={20}>
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center w-full h-full">
          <Image height={900} width={1600} src="/groups.png" alt="People" />
        </div>
      </section>

      <section className="flex flex-col justify-center text-center">
        <h3 className="font-medium text-3xl text-gray-700">
          Featured from{" "}
          <span className="text-green-500 font-semibold">PERPUS</span>Kita
        </h3>

        <div className="flex gap-3 lg:gap-9 justify-center mt-10">
          {[
            {
              name: "Book",
              image: "/books.png",
              contentTop: (
                <div className="text-white text-xl font-medium">
                  More than <br /> {BookCount?.findManyBookCount}{" "}
                  <span className=" font-bold text-yellow-300">
                    Book Collection
                  </span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-80 font-normal text-white">
                  We are here with a total of
                  <br /> {BookCount?.findManyBookCount} book collections.
                </div>
              ),
              bg: "bg-blue-400",
            },
            {
              name: "World",
              image: "/worlds.png",
              contentTop: (
                <div className="text-white text-xl font-medium">
                  More than <br /> 500{" "}
                  <span className=" font-bold text-green-400">Branches</span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-80 font-normal text-white">
                  We are present with a total <br /> of 565 branches and spread
                  <br /> across 525 cities in Indonesia.
                </div>
              ),
              bg: "bg-yellow-300",
            },
            {
              name: "Book",
              image: "/books.png",
              contentTop: (
                <div className="text-white text-xl font-medium">
                  More than <br /> 1,500{" "}
                  <span className=" font-bold text-yellow-300">
                    Certified Librarians
                  </span>
                </div>
              ),
              contentBottom: (
                <div className="opacity-80 font-normal text-white">
                  We have 1620 librarians <br /> and all of them are certified
                </div>
              ),
              bg: "bg-purple-500",
            },
          ].map((e) => (
            <div className={`${e.bg} p-6 rounded-lg`} key={e.name}>
              <div>{e.contentTop}</div>
              <div>
                <Image src={e.image} height={140} width={140} alt={e.name} />
              </div>
              <div>{e.contentBottom}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-between text-center mt-10 content-center">
        <div className="self-center text-left mx-auto">
          <h3 className="font-medium text-3xl text-gray-700">
            Why Should{" "}
            <span className="text-green-500 font-semibold">PERPUS</span>kita?
          </h3>
          <p className="text-gray-500 mt-5">
            PERPUSkita wherever you are with only $5 to borrow <br />
            a book and $5 for shipping you can already get
            <br />
            the book of your dreams.
          </p>
        </div>
        <div className="mx-auto">
          <Image src="/join.svg" height={400} width={600} alt="" />
        </div>
      </section>
      <section className="flex justify-between text-center mt-5">
        <div className="mx-auto">
          <Image src={"/why.svg"} height={400} width={600}></Image>
        </div>
        <div className="self-center mx-auto">
          <h3 className="font-medium text-3xl text-gray-700">
            Let's <span className="text-green-500 font-semibold">Join Us</span>
          </h3>
          <p className="text-gray-500 my-3">
            Create an account and start exxploring
            <br />
            PERPUSkita collection
          </p>
          <Link href="/register">
            <Button px={80} link={"/register"}>
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
