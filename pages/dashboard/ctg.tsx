import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Image from "next/image";
import Dashboard from "../../components/Dashboard";
import { Book, Category } from "../../generated";
import {
  ADD_CATE,
  CREATE_BOOK,
  DEL_BOOK,
  DEL_CATE,
  EDIT_BOOK,
  EDIT_CATE,
  GET_BOOKS,
  GET_CATE,
} from "../../graphql/queries";
import AddBookModal from "../../modals/AddBookModal";
import EditUserModal from "../../modals/EditUserModal";
import EditBookModal from "../../modals/EditBookModal";
import DelBookModal from "../../modals/DelBookModal";
import SuccesModal from "../../modals/SuccesModal";
import AddCtgModal from "../../modals/AddCtgModal";
import EditCtgModal from "../../modals/EditCtgModal";
import DelCtgModal from "../../modals/DelCtgModal";
import Middleware from "../../components/Middleware";

export default function DataCtg() {
  const {
    loading,
    error,
    data: dataCtg,
  } = useQuery<{ findManyCategory: Category[] }>(GET_CATE, {});

  let [isOpen, setIsOpen] = useState(false);
  let [isOpenEdit, setIsOpenEdit] = useState(false);
  let [isOpenDel, setIsOpenDel] = useState(false);
  let [actionId, setActionId] = useState(Number);
  let [actionName, setActionName] = useState(String);

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

  function openModal() {
    setIsOpen(true);
  }

  const [createOneCategory] = useMutation(ADD_CATE, {
    onCompleted: () => {
      openSuccesModal();
      closeModal();
    },
  });

  const onAdd = (name: string) => {
    createOneCategory({
      variables: {
        data: {
          name: name,
        },
      },
    });
  };

  //edit
  function closeEditModal() {
    setIsOpenEdit(false);
  }

  function openEditModal(target: number, name: string) {
    setActionId(target);
    setActionName(name);
    setIsOpenEdit(true);
  }

  const [updateOneCategory] = useMutation(EDIT_CATE, {
    onCompleted: () => {
      openSuccesModal();
      closeEditModal();
    },
  });

  const onEdit = (name: string) => {
    updateOneCategory({
      variables: {
        data: {
          name: {
            set: name,
          },
        },
        where: {
          id: actionId,
        },
      },
    });
  };

  //del
  function closeDelModal() {
    setIsOpenDel(false);
  }

  function openDelModal(target: number) {
    setActionId(target);
    setIsOpenDel(true);
  }

  const [deleteOneCategory] = useMutation(DEL_CATE, {
    onCompleted: () => {
      openSuccesModal();
      closeDelModal();
    },
  });

  const onDel = () => {
    deleteOneCategory({
      variables: {
        where: {
          id: actionId,
        },
      },
    });
  };

  return (
    <Middleware>
      <div>
        <div className="flex flex-row h-screen">
          <SuccesModal
            isOpen={isSuccess}
            closeModal={closeSuccesModal}
          ></SuccesModal>
          <Dashboard />
          <div className="px-16 py-4 text-white dark:bg-gray-700 h-screen w-screen overflow-auto">
            <div className="mt-10 mb-5 flex justify-between">
              <h1 className="font-semibold text-2xl">Category Data</h1>
              <button
                type="button"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={openModal}
              >
                Add Category
              </button>
            </div>
            <AddCtgModal
              isOpen={isOpen}
              closeModal={closeModal}
              onAdd={onAdd}
            ></AddCtgModal>

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
                      ID Category
                    </th>
                    <th scope="" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataCtg?.findManyCategory.map(({ id, name }) => (
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
                      <td className="py-4 px-4" key={id}>
                        <button
                          onClick={() => openEditModal(id, name)}
                          className=" mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                        <EditCtgModal
                          isOpen={isOpenEdit}
                          closeModal={closeEditModal}
                          onAdd={onEdit}
                          name={actionName}
                        ></EditCtgModal>

                        <button
                          onClick={() => openDelModal(id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                        <DelCtgModal
                          isOpen={isOpenDel}
                          closeModal={closeDelModal}
                          onDel={onDel}
                          idCtg={actionId}
                        ></DelCtgModal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Middleware>
  );
}
