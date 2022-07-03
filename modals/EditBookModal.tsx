import React, { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Author, Category } from "../generated";
import { GET_AUTHORS, GET_CATE } from "../graphql/queries";
import { useQuery } from "@apollo/client";

interface ModalProp {
  isOpen: boolean;
  closeModal: Function;
  onEdit: Function;
  titleBook: string;
  coverBook: string;
  idBook: number;
}
export default function EditBookModal({
  isOpen,
  closeModal,
  onEdit,
  titleBook,
  coverBook,
  idBook,
}: ModalProp) {
  async function handleForm(e: any) {
    e.preventDefault();
    const title = e.target.title.value;
    const cover = e.target.cover.value;
    const authId = e.target.auth.value;
    const ctgId = e.target.ctg.value;
    onEdit(title, cover, Number(authId), Number(ctgId));
  }

  const { data: dataCtg } = useQuery<{ findManyCategory: Category[] }>(
    GET_CATE,
    {}
  );

  const { data: dataAuth } = useQuery<{ findManyAuthor: Author[] }>(
    GET_AUTHORS,
    {
      variables: {
        take: 50,
      },
    }
  );

  return (
    <div>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => closeModal()}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Form Edit Buku
                    </Dialog.Title>
                    <div className="mt-2">
                      <form onSubmit={handleForm}>
                        <div className="mb-6">
                          <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={titleBook}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Book Title"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="cover"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Cover
                          </label>
                          <input
                            type="text"
                            id="cover"
                            name="cover"
                            defaultValue={coverBook}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Book Cover"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="ctg"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Category
                          </label>
                          <select name="ctg" id="ctg">
                            {dataCtg?.findManyCategory.map((e) => (
                              <option key={e.id} value={e.id}>
                                {e.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-6">
                          <label
                            htmlFor="auth"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Author
                          </label>
                          <select name="auth" id="auth">
                            {dataAuth?.findManyAuthor.map((e) => (
                              <option key={e.id} value={e.id}>
                                {e.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="ml-24">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => closeModal()}
                          >
                            Cancel
                          </button>
                        </div>
                        {/* </div> */}
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
