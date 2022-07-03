import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@apollo/client";
import { User } from "../generated";
import { MY_BALANCE } from "../graphql/queries";
import ValidValanceModal from "./ValidBalanceModal";
import ValidBalanceModal from "./ValidBalanceModal";
import { useUserStore } from "../components/userStore";

interface ModalProp {
  isOpen: boolean;
  closeModal: Function;
  onAdd: Function;
  idBook: number;
  title: string;
  validBalance: boolean;
}
export default function AddLoanModal({
  isOpen,
  closeModal,
  onAdd,
  idBook,
  title,
  validBalance = false,
}: ModalProp) {
  const { user } = useUserStore();
  async function handleForm(e: any) {
    e.preventDefault();

    onAdd();
  }

  let [isOpenValid, setIsOpenValid] = useState(false);

  const closeValidModal = () => {
    setIsOpenValid(false);
  };

  const openValidModal = () => {
    setIsOpenValid(true);
  };

  const { data: dataBalance } = useQuery<{ findUniqueUser: User }>(MY_BALANCE, {
    variables: {
      where: {
        id: user?.id ?? 0,
      },
    },
  });

  const balance = dataBalance?.findUniqueUser?.balance || 0;

  return (
    <>
      {balance < 10 ? (
        <ValidBalanceModal isOpen={isOpenValid} closeModal={closeValidModal} />
      ) : (
        ""
      )}
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
                      Apakah anda yakin akan meminjam buku {title} ?
                    </Dialog.Title>
                    <div className="mt-2">
                      {/* <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p> */}
                      <form onSubmit={handleForm}>
                        <div className="mb-6">
                          <label
                            htmlFor="value"
                            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Apabila anda yakin maka balance anda akan dikurangi
                            sebesar $10
                          </label>
                          <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                              <input
                                id="terms"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required
                                onClick={() => openValidModal()}
                              />
                            </div>
                            <label
                              htmlFor="terms"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              I agree with the{" "}
                              <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                              >
                                terms and conditions
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="ml-24">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-10 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Yes
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
    </>
  );
}
