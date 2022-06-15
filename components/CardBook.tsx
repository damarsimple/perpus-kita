import Link from "next/link";
import React from "react";
import Button from "./Button";

interface CardProp {
  children: string;
  image: string;
  deskripsi: string;
  author: string;
}

export default function CardBook({ children, image, deskripsi, author }: CardProp) {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg drop-shadow-xl bg-white">
        <div>
          <img src={image} className="w-full h-96 rounded-lg" />
        </div>
        <div className="p-6">
          <p className="text-gray-500 font-medium -mb-2">{author}</p>
          <h5 className="text-gray-900 text-xl font-semibold">{children}</h5>
          <p className="text-gray-400 font-normal  mb-4">{deskripsi}</p>
          <Link href={"/details"}>
            <Button link="/details" px={20}>Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
