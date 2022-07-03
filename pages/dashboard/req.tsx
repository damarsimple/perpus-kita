import { useQuery } from "@apollo/client";
import React from "react";
import Image from "next/image";
import Dashboard from "../../components/Dashboard";
import { UserLoan } from "../../generated";
import { GET_BOOKS, GET_LOANS } from "../../graphql/queries";

export default function Req() {
  const {
    loading,
    error,
    data: dataLoan,
  } = useQuery<{ findManyUserLoan: UserLoan[] }>(GET_LOANS, {
    variables: {
      where: {
        status: {
          equals: "PENDING",
        },
      },
    },
  });
  return (
    <div>
      <div className="flex flex-row h-full">
        <Dashboard />
        <div className="px-16 py-4 text-white dark:bg-gray-700 h-screen w-screen overflow-auto">
          <div className="mt-10 mb-5 flex justify-between">
            <h1 className="font-semibold text-2xl">Loans Request</h1>
            {/* <button
              type="button"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              //   onClick={openAddModal}
            >
              Add Book
            </button> */}
          </div>

          <div className="mb-5">
            <p className="text-center text-gray-400">
              {loading ? "Data is being processed, please wait a moment" : ""}
              {error
                ? "the data failed to process, please wait a moment, we will fix it"
                : ""}
            </p>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-800">
                <tr>
                  <th scope="" className="px-6 py-3">
                    ID Loan
                  </th>
                  <th scope="" className="px-6 py-3">
                    User ID
                  </th>
                  <th scope="" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="" className="px-6 py-3">
                    Book ID
                  </th>
                  <th scope="" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="" className="px-6 py-3">
                    STATUS
                  </th>
                  <th scope="" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataLoan?.findManyUserLoan.map(
                  ({ id, user, book, status, price }) => (
                    <tr
                      key={id}
                      className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                    >
                      <td
                        scope="row"
                        className="py-4 px-4 font-medium text-gray-700 dark:text-white whitespace-nowrap"
                      >
                        {id}
                      </td>
                      <td className="py-4 px-4">{user.id}</td>
                      <td className="py-4 px-4">{user.name}</td>
                      <td className="py-4 px-4">{book.id}</td>
                      <td className="py-4 px-4">{book.title}</td>
                      <td className="py-4 px-4">
                        <p className="px-1 py-1  bg-green-400 rounded-lg text-center text-white">
                          {status}
                        </p>
                      </td>
                      <td className="py-4 px-4" key={id}>
                        <button className=" mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Action
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
