import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Dashboard from "../../components/Dashboard";
import Middleware from "../../components/Middleware";
import { Author, Book } from "../../generated";
import {
  ADD_AUTH,
  DEL_AUTH,
  EDIT_AUTH,
  GET_AUTHORS,
} from "../../graphql/queries";
import AddAuthModal from "../../modals/AddAuthModal";
import DelAuthModal from "../../modals/DelAuthModal";
import EditAuthModal from "../../modals/EditAuthModal";
import SuccesModal from "../../modals/SuccesModal";

export default function DataAuthor() {
  const {
    loading,
    error,
    data: dataAuthor,
  } = useQuery<{ findManyAuthor: Author[] }>(GET_AUTHORS, {
    variables: {
      take: 5,
    },
  });

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

  //add

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [createOneAuthor] = useMutation(ADD_AUTH, {
    onCompleted: () => {
      openSuccesModal();
      closeModal();
    },
  });

  const onAdd = (name: string) => {
    createOneAuthor({
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

  const [updateOneAuthor] = useMutation(EDIT_AUTH, {
    onCompleted: () => {
      openSuccesModal();
      setActionId(0);
      closeEditModal();
    },
  });

  const onEdit = (name: string) => {
    updateOneAuthor({
      variables: {
        where: {
          id: actionId,
        },
        data: {
          name: {
            set: name,
          },
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

  const [deleteOneAuthor] = useMutation(DEL_AUTH, {
    onCompleted: () => {
      openSuccesModal();
      closeDelModal();
    },
  });

  const onDel = () => {
    deleteOneAuthor({
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
              <h1 className="font-semibold text-2xl">Authors Data</h1>
              <button
                type="button"
                className="ml-3 inline-flex self-end rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={openModal}
              >
                Add Author
              </button>
            </div>
            <AddAuthModal
              isOpen={isOpen}
              closeModal={closeModal}
              onAdd={onAdd}
            ></AddAuthModal>

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
                      <td className="py-4 px-4">{_count.books}</td>
                      <td className="py-4 px-4" key={id}>
                        <button
                          onClick={() => openEditModal(id, name)}
                          className=" mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </button>
                        <EditAuthModal
                          isOpen={isOpenEdit}
                          closeModal={closeEditModal}
                          onAdd={onEdit}
                          name={actionName}
                        ></EditAuthModal>

                        <button
                          onClick={() => openDelModal(id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                        <DelAuthModal
                          isOpen={isOpenDel}
                          closeModal={closeDelModal}
                          onDel={onDel}
                          idAuth={actionId}
                        />
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
