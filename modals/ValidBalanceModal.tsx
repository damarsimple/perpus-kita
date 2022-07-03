import React, { Fragment, useEffect, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Author, Category, User } from "../generated";
import { GET_AUTHORS, GET_CATE, MY_BALANCE } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Link from "next/link";

interface ModalProp {
  isOpen: boolean;
  closeModal: Function;
}
export default function ValidValanceModal({ isOpen, closeModal }: ModalProp) {
  async function handleForm(e: any) {
    e.preventDefault();
  }

  const { data: dataBalance } = useQuery<{ findUniqueUser: User }>(MY_BALANCE, {
    variables: {
      where: {
        id: 2,
      },
    },
  });

  const balance = dataBalance?.findUniqueUser?.balance || 0;

  useEffect(() => {
    if (balance > 10) {
      closeModal();
    }
  }, [balance]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
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
                  Pastikan balance anda lebih dari $10
                </Dialog.Title>
                <div className="my-3">
                  Balance anda kurang dari $10, buka dashboard dan silahkan top
                  up terlebih dahulu
                </div>
                <div className="mt-2">
                  <form>
                    <div className="ml-24">
                      <Link href="/dashboard">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Go Dashboard
                        </button>
                      </Link>
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
  );
}
