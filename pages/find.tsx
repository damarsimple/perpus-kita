import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import CardBook from "../components/CardBook";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Book } from "../generated";
import { BORROW, GET_BOOKS } from "../graphql/queries";
import BorrowModal from "../modals/BorrowModal";

export default function Find() {
  const {
    loading,
    error,
    data: dataBook,
  } = useQuery<{ findManyBook: Book[] }>(GET_BOOKS, {
    variables: {
      take: 10,
    },
  });

  let [isOpenBor, setIsOpenBor] = useState(false);
  let [idBook, setIdBook] = useState(Number);
  let [titleBook, setTitleBook] = useState(String);

  function closeBorModal() {
    setIsOpenBor(false);
  }

  function openBorModal(idNow: number, titleNow: string) {
    setIdBook(idNow);
    setTitleBook(titleNow);
    setIsOpenBor(true);
  }

  const [createOneUserLoan] = useMutation(BORROW, {
    onCompleted: (e) => {
      // closeBorModal();
      e.preventDefault();
      // window.location.reload();
    },
  });

  const onBor = (idBook: number, e: any) => {
    e.preventDefault();
    createOneUserLoan({
      variables: {
        data: {
          user: {
            connect: {
              id: 1,
            },
          },
          book: {
            connect: {
              id: idBook,
            },
          },
          loanExpiredAt: "2022-7-8",
          createdAt: "2022-7-1",
          price: 10,
          status: "APPROVED",
        },
      },
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <section>
          <h1 className="mt-16 font-semibold text-3xl text-gray-700 text-center">
            Find Your Favorite <span className="text-green-400"> Book</span> Now
          </h1>
          <p className="text-gray-400 text-center mt-1">
            Enter the title of the book to start the search.
          </p>
          <div className="flex justify-center items-center mt-5">
            <input
              type="text"
              className="py-1 px-32 rounded-xl border-green-600 text-gray-700"
            />
            <div className="h-full ml-4">
              <Link href="#">
                <Button px={20}>Search</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="grid grid-rows-1 grid-cols-4 gap-0">
            {dataBook?.findManyBook.map(({ id, title, cover, author }) => (
              <div className="mb-10" key={id}>
                <CardBook
                  id={id}
                  auth={author.name}
                  title={title}
                  image={cover || ""}
                >
                  {title}
                </CardBook>
              </div>
              // </div>
              // <div className="flex justify-center my-3 mx-3">
              //   <div className="rounded-lg drop-shadow-xl bg-white" key={id}>
              //     <div>
              //       <Image
              //         src={cover || " "}
              //         height={400}
              //         width={300}
              //         className="w-full h-96 rounded-lg"
              //       />
              //     </div>
              //     <div className="p-6">
              //       <p className="text-gray-500 font-medium mb-1">
              //         {author.name}
              //       </p>
              //       <h5 className="text-gray-900 text-xl font-semibold mb-3">
              //         {title}
              //       </h5>
              //       {/* <p className="text-gray-400 font-normal  mb-4">{deskripsi}</p> */}
              //       <button
              //         style={{
              //           paddingLeft: 20,
              //           paddingRight: 20,
              //         }}
              //         className="cursor-pointer text-lg font-medium hover:bg-green-600 py-1 px-4 bg-green-400 shadow-md text-white rounded-full"
              //         onClick={() => openBorModal(id, title)}
              //       >
              //         Borrow
              //       </button>
              //       <BorrowModal
              //         isOpenBor={isOpenBor}
              //         closeBorModal={closeBorModal}
              //         title={titleBook}
              //         bookId={idBook}
              //         onBor={onBor}
              //       />
              //     </div>
              //   </div>
              // </div>
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
