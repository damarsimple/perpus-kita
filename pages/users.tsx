import { useQuery } from "@apollo/client";
import React from "react";
import Dashboard from "../components/Dashboard";
import { User } from "../generated";
import { GET_USERS } from "../graphql/queries";

export default function users() {
  const { loading, error, data } = useQuery<{ findManyUser: User[] }>(
    GET_USERS
  );

  if (loading) {
    return "loading";
  }
  if (error) {
    return "error";
  }
  console.log(data);
  return (
    <div className="flex flex-row h-screen">
      <Dashboard />
      <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
        <h1>USERS</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Addres</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {data?.findManyUser.map(
              ({ id, name, email, username, address, balance }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{username}</td>
                  <td>{address}</td>
                  <td>{balance}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
