import { useMutation, useQuery } from "@apollo/client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Dashboard from "../../components/Dashboard";
import { Transaction, User, UserLoan } from "../../generated";
import {
  GET_LOANS,
  GET_TRANS,
  MY_BALANCE,
  MY_TRANS,
  TRANSAKSI1,
  TRANSAKSI2,
} from "../../graphql/queries";
import TopUpModal from "../../modals/TopUpModal";
import { useUserStore } from "../../components/userStore";
import SuccesModal from "../../modals/SuccesModal";
import Middleware from "../../components/Middleware";

export default function transaction() {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useUserStore();
  const [isSuccess, setIsSuccess] = useState(false);

  function closeSuccesModal() {
    setIsSuccess(false);
  }

  function openSuccesModal() {
    setIsSuccess(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const {
    loading,
    error,
    data: dataTrans,
  } = useQuery<{ findManyTransaction: Transaction[] }>(MY_TRANS, {
    variables: {
      where: {
        user: {
          id: {
            equals: user?.id ?? 0,
          },
        },
      },
    },
  });

  const { data: dataBalance } = useQuery<{ findUniqueUser: User }>(MY_BALANCE, {
    variables: {
      where: {
        id: user?.id ?? 0,
      },
    },
  });

  const [updateOneUser] = useMutation(TRANSAKSI1, {
    // onCompleted: () => {
    //   // closeAddModal();
    // },
  });

  const [createOneTransaction] = useMutation(TRANSAKSI2, {
    onCompleted: () => {
      openSuccesModal();
      closeModal();
    },
  });

  const onAdd = (value: number) => {
    // e.preventDefault();
    // const value = e.target.x.value;
    updateOneUser({
      variables: {
        updateOneUserData2: {
          balance: {
            increment: value,
          },
        },
        where: {
          id: user?.id ?? 0,
        },
      },
    });

    createOneTransaction({
      variables: {
        data: {
          amount: value,
          type: "MIDTRANS",
          user: {
            connect: {
              id: user?.id ?? 0,
            },
          },
        },
      },
    });
  };

  return (
    <Middleware>
      <div>
        <div className="flex flex-row h-full">
          <SuccesModal
            isOpen={isSuccess}
            closeModal={closeSuccesModal}
          ></SuccesModal>
          <Dashboard />
          <div className="px-16 py-4 text-white dark:bg-gray-700 h-screen w-screen overflow-auto">
            <h1 className="font-semibold text-2xl">My Transaction</h1>
            <div className="mt-10 mb-5 flex justify-between">
              <div>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => openModal()}
                >
                  TOP UP
                </button>
              </div>
              <div>
                <h1 className="px-3 py-1 bg-green-400 rounded-lg text-center text-white">
                  My balance : ${dataBalance?.findUniqueUser?.balance}
                </h1>
              </div>
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
              <TopUpModal
                isOpen={isOpen}
                closeModal={closeModal}
                onAdd={onAdd}
              ></TopUpModal>
            </div>
          </div>
        </div>
      </div>
    </Middleware>
  );
}
