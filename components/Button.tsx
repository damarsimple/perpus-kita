import Link from "next/link";
import React from "react";

type ButtonType = "outlined" | "filled";
// let used = "bg-red-600 bg-green-600";
interface ButtonProp {
  children: string;
  color?: string;
  type?: ButtonType;
  link?: string;
  px?: string;
}
export default function Button({ children, color = "green", px = "4", type, link = "#" }: ButtonProp) {
  let className;
  let pxNew = `px-${px}`;
  switch (type) {
    case "outlined":
      className = `cursor-pointer text-lg font-medium py-1 ${pxNew} rounded-full border-2 border-green-500 text-black/70 hover:border-green-700 hover:text-black/90`;
      break;
    case "filled":
    default:
      className = `cursor-pointer text-lg font-medium hover:bg-green-600 py-1 ${pxNew} bg-green-400 text-white rounded-full`;
      break;
  }
  return (
    <Link href={link}>
      <button className={className}>{children}</button>
    </Link>
  );
}
