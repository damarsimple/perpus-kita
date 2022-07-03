import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { useMutation, useQuery } from "@apollo/client";
import { BORROW, MY_BALANCE, TRANSAKSI3 } from "../graphql/queries";
import AddOn from "../modals/AddLoanModal";
import AddLoanModal from "../modals/AddLoanModal";
import { User } from "../generated";
import ValidValanceModal from "../modals/ValidBalanceModal";
import { useUserStore } from "./userStore";
import SuccesModal from "../modals/SuccesModal";

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
  let [isOpenValid, setIsOpenValid] = useState(false);
  const { user } = useUserStore();
  let [isSuccess, setIsSuccess] = useState(false);

  function closeSuccesModal() {
    setIsSuccess(false);
  }

  function openSuccesModal() {
    setIsSuccess(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(target: number) {
    setIdBook(target);
    // setIsOpenValid(true);
    setIsOpen(true);
  }

  const [createOneUserLoan] = useMutation<{ d: number }>(BORROW, {
    onCompleted: (data) => {
      openSuccesModal();
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
              id: user?.id ?? 0,
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
          id: user?.id ?? 0,
        },
      },
    });
  };

  const closeValidModal = () => {
    setIsOpenValid(false);
  };

  const openValidModal = () => {
    setIsOpenValid(true);
  };

  return (
    <div className="flex justify-center shadow rounded"  style={{
      position: "relative",
      overflow: "hidden",
      height: "550px",
      width: "300px",
    }}>
      <SuccesModal
        isOpen={isSuccess}
        closeModal={closeSuccesModal}
      ></SuccesModal>
      <div className="rounded-lg drop-shadow-xl bg-white">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "400px",
            width: "300px",
          }}
        >
          <Image
            alt=""
            src={image}
            className="w-full h-96 rounded-lg"
            layout="fill"
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
          {/* <ValidValanceModal
            isOpen={isOpenValid}
            closeModal={closeValidModal}
          /> */}
          <AddLoanModal
            isOpen={isOpen}
            closeModal={closeModal}
            onAdd={onAdd}
            idBook={id}
            title={title}
            validBalance={true}
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
