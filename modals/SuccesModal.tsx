import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Author, Category, User } from "../generated";
import { GET_AUTHORS, GET_CATE, MY_BALANCE } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";

interface ModalProp {
  isOpen: boolean;
  closeModal: Function;
}
export default function SuccesModal({ isOpen, closeModal }: ModalProp) {
  return (
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
                  <Dialog.Panel className="w-full text-center max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                    <Image src="/Sukses.svg" height={300} width={300} />
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900"
                    >
                      Yeayy, Operation{" "}
                      <span className="font-semibold text-green-400">
                        Success
                      </span>
                      {":)"}
                    </Dialog.Title>
                    <div className="my-3 text-gray-500 font-normal">
                      what do you want to do next?
                    </div>
                    <div className="mt-2">
                      <form>
                        <div className="ml-24">
                          <Link href="/dashboard">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                              Dashboard
                            </button>
                          </Link>
                          {/* <Link href="/dashboard"> */}
                          <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Refresh
                          </button>
                          {/* </Link> */}
                          <button
                            type="button"
                            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => closeModal()}
                          >
                            Close
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
  );
}
