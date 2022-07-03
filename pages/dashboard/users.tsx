import { useMutation, useQuery } from "@apollo/client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Button from "../../components/Button";
import Link from "next/link";
import Dashboard from "../../components/Dashboard";
import { User } from "../../generated";
import {
  GET_USERS,
  DEL_USER,
  ADD_USER,
  EDIT_USER,
} from "../../graphql/queries";
import AddUserModal from "../../modals/AddUserModal";
import DeleteUserModal from "../../modals/DeleteUserModal";
import EditUserModal from "../../modals/EditUserModal";
import SuccesModal from "../../modals/SuccesModal";
import Middleware from "../../components/Middleware";

export default function users({}) {
  const {
    loading,
    error,
    data: dataUser,
  } = useQuery<{ findManyUser: User[] }>(GET_USERS, {
    variables: {
      where: {
        isAdmin: {
          equals: false,
        },
      },
    },
  });

  let [isOpenDel, setIsOpenDel] = useState(false);
  let [isOpenEdit, setIsOpenEdit] = useState(false);
  let [isOpenAdd, setIsOpenAdd] = useState(false);
  const [actionId, setActionId] = useState(Number);
  const [isName, setNama] = useState(String);
  const [isUser, setUser] = useState(String);
  const [isPass, setPass] = useState(String);
  const [isAdd, setAdd] = useState(String);

  let [isSuccess, setIsSuccess] = useState(false);

  function closeSuccesModal() {
    setIsSuccess(false);
  }

  function openSuccesModal() {
    setIsSuccess(true);
  }

  //ADD USER
  const [createOneUser] = useMutation(ADD_USER, {
    onCompleted: (dataUser) => {
      openSuccesModal();

      closeAddModal();
    },
  });

  const onAdd = (
    emailAdd: string,
    nameAdd: string,
    usernameAdd: string,
    passAdd: string,
    addressAdd: string
    // e: any
  ) => {
    // e.preventDefault();
    createOneUser({
      variables: {
        data: {
          email: emailAdd,
          name: nameAdd,
          username: usernameAdd,
          password: passAdd,
          address: addressAdd,
          isAdmin: false,
        },
      },
    });
  };

  function closeAddModal() {
    setIsOpenAdd(false);
  }

  function openAddModal() {
    setIsOpenAdd(true);
  }
  //END ADD USER

  //DEL USER
  const [deleteOneUser] = useMutation(DEL_USER, {
    onCompleted: (dataUser) => {
      openSuccesModal();
      closeDelModal();
    },
  });

  const onDel = () => {
    deleteOneUser({ variables: { where: { id: actionId } } });
  };

  function closeDelModal() {
    setIsOpenDel(false);
  }

  function openDelModal(id: number) {
    setActionId(id);

    setIsOpenDel(true);
  }
  //END DEL USER

  //EDIT USER

  function closeEditModal() {
    setActionId(0);
    setIsOpenEdit(false);
  }
  function openEditModal(
    id: number,
    nama: string,
    user: string,
    pass: string,
    add: string
  ) {
    setActionId(id);
    setNama(nama);
    setUser(user);
    setPass(pass);
    setAdd(add);
    // if (id > 0) {
    setIsOpenEdit(true);
    // }

    console.log(actionId);
  }

  const [updateOneUser] = useMutation(EDIT_USER, {
    onCompleted: (dataUser) => {
      openSuccesModal();
      closeEditModal();
      // window.location.reload();
    },
  });

  const onEdit = (
    nameEdit: string,
    usernameEdit: string,
    passEdit: string,
    addressEdit: string,
    idEdit: number
    // e
  ) => {
    // e.preventDefault();
    updateOneUser({
      variables: {
        data: {
          name: {
            set: nameEdit,
          },
          username: { set: usernameEdit },
          password: {
            set: passEdit,
          },
          address: { set: addressEdit },
        },
        where: {
          id: idEdit,
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
              <h1 className="font-semibold text-2xl">Users Data</h1>
              <button
                type="button"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={openAddModal}
              >
                Add User
              </button>
              <AddUserModal
                isOpenAdd={isOpenAdd}
                closeAddModal={closeAddModal}
                onAdd={onAdd}
              />
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
                      ID User
                    </th>
                    <th scope="" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="" className="px-6 py-3">
                      Balance
                    </th>
                    <th scope="" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataUser?.findManyUser.map(
                    ({
                      id,
                      name,
                      email,
                      username,
                      password,
                      address,
                      balance,
                    }) => (
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
                        <td className="py-4 px-4">{email}</td>
                        <td className="py-4 px-4">{username}</td>
                        <td className="py-4 px-4">{address}</td>
                        <td className="py-4 px-4">{balance}</td>
                        <td className="py-4 px-4" key={id}>
                          <button
                            className=" mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            onClick={() =>
                              openEditModal(
                                id,
                                name,
                                username,
                                password,
                                address
                              )
                            }
                          >
                            Edit
                          </button>

                          {/* <DeleteUser isOpen={} onClose={} onSubmit={}/> */}
                          <button
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                            onClick={() => openDelModal(id)}
                          >
                            Delete
                          </button>
                          <DeleteUserModal
                            isOpenDel={isOpenDel}
                            closeDelModal={closeDelModal}
                            actionId={actionId}
                            onDel={onDel}
                          />
                        </td>
                        <EditUserModal
                          key={actionId}
                          isOpenEdit={isOpenEdit}
                          closeEditModal={closeEditModal}
                          onEdit={onEdit}
                          actionId={actionId}
                          name={isName}
                          user={isUser}
                          pass={isPass}
                          address={isAdd}
                        />
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
