import { useQuery } from "@apollo/client";
import React from "react";
import Image from "next/image";
import Dashboard from "../../components/Dashboard";
import { Transaction, UserLoan } from "../../generated";
import { GET_LOANS, GET_TRANS } from "../../graphql/queries";
import Middleware from "../../components/Middleware";

export default function IsTransaction() {
  const {
    loading,
    error,
    data: dataTrans,
  } = useQuery<{ findManyTransaction: Transaction[] }>(GET_TRANS, {
    variables: {},
  });
  return (
    <Middleware>
      <div>
        <div className="flex flex-row h-full">
          <Dashboard />
          <div className="px-16 py-4 text-white dark:bg-gray-700 h-screen w-screen overflow-auto">
            <div className="mt-10 mb-5 flex justify-between">
              <h1 className="font-semibold text-2xl">Log Transaction</h1>
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
                      ID Transaction
                    </th>
                    <th scope="" className="px-6 py-3">
                      User ID
                    </th>
                    <th scope="" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="" className="px-6 py-3">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataTrans?.findManyTransaction.map(
                    ({ id, user, amount, userId, type }) => (
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
                        <td className="py-4 px-4">{userId}</td>
                        <td className="py-4 px-4">{user.name}</td>
                        <td className="py-4 px-4">{type}</td>
                        <td className="py-4 px-4">{amount}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Middleware>
  );
}
