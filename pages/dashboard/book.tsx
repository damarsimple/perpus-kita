import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import Image from "next/image";
import Dashboard from "../../components/Dashboard";
import { Book } from "../../generated";
import {
  CREATE_BOOK,
  DEL_BOOK,
  EDIT_BOOK,
  GET_BOOKS,
} from "../../graphql/queries";
import AddBookModal from "../../modals/AddBookModal";
import EditUserModal from "../../modals/EditUserModal";
import EditBookModal from "../../modals/EditBookModal";
import DelBookModal from "../../modals/DelBookModal";
import SuccesModal from "../../modals/SuccesModal";
import Middleware from "../../components/Middleware";

export default function DataBook() {
  const {
    loading,
    error,
    data: dataBook,
  } = useQuery<{ findManyBook: Book[] }>(GET_BOOKS, {
    variables: {
      take: 5,
    },
  });

  let [isOpen, setIsOpen] = useState(false);
  let [isOpenEdit, setIsOpenEdit] = useState(false);
  let [isOpenDel, setIsOpenDel] = useState(false);
  let [actionId, setActionId] = useState(Number);
  let [actionTitle, setActionTitle] = useState(String);
  let [actionCover, setActionCover] = useState(String);

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

  const [createOneBook] = useMutation(CREATE_BOOK, {
    onCompleted: () => {
      openSuccesModal();
      closeModal();
    },
  });

  const onAdd = (
    title: string,
    cover: string,
    authId: number,
    ctgId: number
  ) => {
    createOneBook({
      variables: {
        data: {
          title: title,
          cover: cover,
          author: {
            connect: {
              id: authId,
            },
          },
          categories: {
            connect: [
              {
                id: ctgId,
              },
            ],
          },
        },
      },
    });
  };

  //edit
  function closeEditModal() {
    setIsOpenEdit(false);
  }

  function openEditModal(target: number, title: string, cover: any) {
    setActionId(target);
    setActionTitle(title);
    setActionCover(cover);
    setIsOpenEdit(true);
  }

  const [updateOneBook] = useMutation(EDIT_BOOK, {
    onCompleted: () => {
      openSuccesModal();
      setActionId(0);
      closeEditModal();
    },
  });

  const onEdit = (
    title: string,
    cover: string,
    authId: number,
    ctgId: number
  ) => {
    updateOneBook({
      variables: {
        where: {
          id: actionId,
        },
        data: {
          title: {
            set: title,
          },
          cover: {
            set: cover,
          },
          author: {
            update: {
              id: {
                set: authId,
              },
            },
          },
          categories: {
            set: [
              {
                id: ctgId,
              },
            ],
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

  const [deleteOneBook] = useMutation(DEL_BOOK, {
    onCompleted: () => {
      openSuccesModal();
      closeDelModal();
    },
  });

  const onDel = () => {
    deleteOneBook({
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
        <div className="flex flex-row h-full">
          <SuccesModal
            isOpen={isSuccess}
            closeModal={closeSuccesModal}
          ></SuccesModal>
          <Dashboard />
          <div className="px-16 py-4 text-white dark:bg-gray-700 h-screen w-screen overflow-auto">
            <div className="mt-10 mb-5 flex justify-between">
              <h1 className="font-semibold text-2xl">Books Data</h1>
              <button
                type="button"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={openModal}
              >
                Add Book
              </button>
            </div>
            <AddBookModal
              isOpen={isOpen}
              closeModal={closeModal}
              onAdd={onAdd}
            ></AddBookModal>

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
                      ID Book
                    </th>
                    <th scope="" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="" className="px-6 py-3">
                      Cover
                    </th>
                    <th scope="" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="" className="px-6 py-3">
                      Author
                    </th>
                    <th scope="" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataBook?.findManyBook.map(
                    ({ id, title, cover, author, categories }) => (
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
                        <td className="py-4 px-4">{title}</td>
                        {/* <td className="py-4 px-4">{title}</td> */}
                        <td className="py-4 px-4">
                          {/* <td className="py-4 px-4"> */}
                          {/* <IMAGE SRC="{cover}" /> */}
                          <div>
                            <Image
                              src={cover || ""}
                              width={140}
                              height={140}
                              alt={cover || ""}
                            ></Image>
                          </div>
                        </td>
                        {categories.map((e) => (
                          <td className="py-4 px-4">{e.name}</td>
                        ))}

                        <td className="py-4 px-4">{author.name}</td>
                        <td className="py-4 px-4" key={id}>
                          <button
                            onClick={() => openEditModal(id, title, cover)}
                            className=" mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </button>
                          <EditBookModal
                            isOpen={isOpenEdit}
                            closeModal={closeEditModal}
                            onEdit={onEdit}
                            titleBook={actionTitle}
                            coverBook={actionCover}
                            idBook={actionId}
                          ></EditBookModal>

                          {/* <DeleteUser isOpen={} onClose={} onSubmit={}/> */}
                          <button
                            onClick={() => openDelModal(id)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                          <DelBookModal
                            isOpen={isOpenDel}
                            closeModal={closeDelModal}
                            onDel={onDel}
                            idBook={actionId}
                          ></DelBookModal>
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
    </Middleware>
  );
}
