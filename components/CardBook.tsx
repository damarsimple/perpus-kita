import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import BorrowModal from "../modals/BorrowModal";
import { useMutation } from "@apollo/client";
import { BORROW, TRANSAKSI3 } from "../graphql/queries";
import AddOn from "../modals/AddLoanModal";
import AddLoanModal from "../modals/AddLoanModal";

interface CardProp {
  title: string;
  image: string;
  auth: string;
  id: number;
  children: string;
}

export default function CardBook({
  id,
  title,
  children,
  image,
  auth,
}: CardProp) {
  let [isOpen, setIsOpen] = useState(false);
  let [isIdBook, setIdBook] = useState(id);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(target: number) {
    setIdBook(target);
    setIsOpen(true);
  }

  const [createOneUserLoan] = useMutation(BORROW, {
    onCompleted: () => {
      closeModal();
      // window.location.reload();
    },
  });

  const [updateOneUser] = useMutation(TRANSAKSI3, {});
  const onAdd = () => {
    // e.preventDefault();
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
              id: isIdBook,
            },
          },
          loanExpiredAt: "2022-7-8",
          createdAt: "2022-7-1",
          price: 10,
          status: "APPROVED",
        },
      },
    });

    updateOneUser({
      variables: {
        data: {
          balance: {
            decrement: 10,
          },
        },
        where: {
          id: 1,
        },
      },
    });
  };

  return (
    <div className="flex justify-center">
      <div className="rounded-lg drop-shadow-xl bg-white">
        <div>
          <Image
            src={image}
            height={400}
            width={300}
            className="w-full h-96 rounded-lg"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-500 font-medium -mb-2">{auth}</p>
          <h5 className="text-gray-900 text-xl font-semibold">{children}</h5>
          {/* <p className="text-gray-400 font-normal  mb-4">{deskripsi}</p> */}
          <button
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
            className="cursor-pointer text-lg font-medium hover:bg-green-600 py-1 px-4 bg-green-400 shadow-md text-white rounded-full"
            onClick={() => openModal(id)}
          >
            Borrow
          </button>
          <AddLoanModal
            isOpen={isOpen}
            closeModal={closeModal}
            onAdd={onAdd}
            idBook={id}
            title={title}
          ></AddLoanModal>
          {/* <BorrowModal
            isOpenBor={isOpen}
            closeBorModal={closeModal}
            title={title}
            bookId={id}
            onBor={onAdd}
          /> */}
        </div>
      </div>
    </div>
  );
}
