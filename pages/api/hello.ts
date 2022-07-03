// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  age: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    { name: "John Doe", age: 20 },
    { name: "Johna Doe", age: 22 },
    { name: "Johnaa Doe", age: 20 },
    { name: "Johnaaa Doe", age: 20 },
  ]);
}
