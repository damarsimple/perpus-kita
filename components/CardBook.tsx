import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import BorrowModal from "../modals/BorrowModal";

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
  let [isOpenBor, setIsOpenBor] = useState(false);
  let [idBook, setIdBook] = useState(id);

  function closeBorModal() {
    setIsOpenBor(false);
  }

  function openBorModal() {
    setIsOpenBor(true);
  }

  function onBor() {}

  return (
    <div className="flex justify-center">
      <div className="rounded-lg drop-shadow-xl bg-white">
        {id}
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
            onClick={() => openBorModal()}
          >
            Borrow
          </button>
          <BorrowModal
            isOpenBor={isOpenBor}
            closeBorModal={closeBorModal}
            title={title}
            bookId={id}
            onBor={onBor}
          />
        </div>
      </div>
    </div>
  );
}
