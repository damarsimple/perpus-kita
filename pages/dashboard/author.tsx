import { useQuery } from "@apollo/client";
import React from "react";
import Dashboard from "../../components/Dashboard";
import { Author, Book } from "../../generated";
import { GET_AUTHORS } from "../../graphql/queries";

export default function book() {
  const {
    loading,
    error,
    data: dataAuthor,
  } = useQuery<{ findManyAuthor: Author[] }>(GET_AUTHORS, {
    variables: {
      take: 5,
    },
  });
  return (
    <div>
      <div className="flex flex-row h-screen">
        <Dashboard />
        <div className="px-16 py-4 text-white dark:bg-gray-700 h-screen w-screen">
          <div className="mt-10 mb-5 flex justify-between">
            <h1 className="font-semibold text-2xl">Books Data</h1>
            <button
              type="button"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              //   onClick={openAddModal}
            >
              Add Author
            </button>
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
                    ID Author
                  </th>
                  <th scope="" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="" className="px-6 py-3">
                    Total Book
                  </th>
                  <th scope="" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataAuthor?.findManyAuthor.map(({ id, name, _count }) => (
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
                    <td className="py-4 px-4">{name}</td>
                    {/* <td className="py-4 px-4">{title}</td> */}
                    <td className="py-4 px-4">{_count.books}</td>
                    {/* <td className="py-4 px-4"> */}
                    {/* <img src="{cover}" alt="{cover}" /> */}
                    {/* </td> */}
                    <td className="py-4 px-4" key={id}>
                      <button className=" mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </button>

                      {/* <DeleteUser isOpen={} onClose={} onSubmit={}/> */}
                      <button className="font-medium text-red-600 dark:text-red-500 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
