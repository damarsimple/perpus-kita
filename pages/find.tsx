import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import CardBook from "../components/CardBook";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Book } from "../generated";
import { BOOK_COUNT, BORROW, GET_BOOKS } from "../graphql/queries";
import { useUserStore } from "../components/userStore";
import BookPaginationModal from "../modals/BookPaginationModal";

export default function Find() {
  const take = 12;

  const [currentPage, setCurrentPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const {
    loading,
    error,
    data: dataBook,
  } = useQuery<{ findManyBook: Book[] }>(GET_BOOKS, {
    variables: {
      take,
      skip: currentPage * take,
      where: {
        title: {
          contains: searchInput ?? undefined,
        },
      },
    },
  });

  const { data: BookCount } = useQuery<{ findManyBookCount: number }>(
    BOOK_COUNT
  );

  const generatePagination = () => {
    if (!BookCount?.findManyBookCount) return {};

    const totalPage = Math.ceil(BookCount.findManyBookCount / take);

    const pagination = [];
    for (let i = 0; i < totalPage; i++) {
      pagination.push(i);
    }

    const pages = [];

    for (let index = 0; index < 10; index++) {
      const element = pagination[index];
      pages.push(element);
    }

    return {
      pages,
      lastPage: totalPage,
    };
  };

  const pagesD = generatePagination();

  const { pages, lastPage = 0 } = pagesD;

  const [openModal, setOpenModal] = useState(false);

  const [commitPage, setCommitPage] = useState(0);

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
        
              value={searchInput}
              onChange={(e) => {
                setCurrentPage(0)
                setSearchInput(e.target.value);
              }}
            />
          
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

        <BookPaginationModal isOpen={openModal} setOpen={setOpenModal}>
          <input
            type="text"
            id="value"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            value={commitPage}
            onChange={(e) => setCommitPage(Number(e.target.value))}
          />
          <button
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            className="text-lg font-medium hover:bg-green-600 py-1 px-4 bg-green-400 shadow-md text-white rounded-full"
            onClick={() => {
              if (commitPage == 0 || commitPage > (lastPage ?? 0)) {
                return;
              }

              setCurrentPage(commitPage);
              setOpenModal(false);
            }}
          >
            SUBMIT
          </button>
        </BookPaginationModal>

        <section className="mt-10 flex justify-center gap-1">
          <button
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            onClick={() => {
              setCurrentPage(currentPage < 1 ? currentPage : currentPage - 1);
            }}
            className={`text-lg font-medium hover:bg-green-600 py-1 px-4 ${
              currentPage == lastPage ? "bg-blue-400" : "bg-green-400"
            } shadow-md text-white rounded-full`}
          >
            {"<"}
          </button>
          {pages?.map((e) => (
            <button
              key={e}
              style={{
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onClick={() => {
                setCurrentPage(e);
              }}
              className={`text-lg font-medium hover:bg-green-600 py-1 px-4 ${
                currentPage == e ? "bg-blue-400" : "bg-green-400"
              } shadow-md text-white rounded-full`}
            >
              {e < 10 ? e + 1 : e}
            </button>
          ))}
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            className={`text-lg font-medium hover:bg-green-600 py-1 px-4 bg-green-400 shadow-md text-white rounded-full`}
          >
            Go To
          </button>
          <button
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            onClick={() => {
              setCurrentPage(lastPage ?? 0);
            }}
            className={`text-lg font-medium hover:bg-green-600 py-1 px-4 ${
              currentPage == lastPage ? "bg-blue-400" : "bg-green-400"
            } shadow-md text-white rounded-full`}
          >
            {lastPage}
          </button>
          <button
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            onClick={() => {
              setCurrentPage(
                currentPage > lastPage ? currentPage : currentPage + 1
              );
            }}
            className={`text-lg font-medium hover:bg-green-600 py-1 px-4 ${
              currentPage == lastPage ? "bg-blue-400" : "bg-green-400"
            } shadow-md text-white rounded-full`}
          >
            {">"}
          </button>
        </section>
      </div>
      <section className="mt-5">
        <Footer />
      </section>
    </div>
  );
}
