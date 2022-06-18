import Link from "next/link";
import React from "react";
import Dashboard from "../components/Dashboard";

// const name = document.querySelector('#name').value
// const rollNumber = document.querySelector('#rollNumber').value

// if (!name) {
//   alert('Please enter your name.')
//   return false
// }

// if (rollNumber.length < 3) {
//   alert('Roll Number should be at least 3 digits long.')
//   return false
// }
export default function dashboard() {
  async function submitCon(e: any) {
    e.preventDefault();
    const name = e.target.name.value;
    const rollNumber = e.target.rollNumber.value;

    if (!name) {
      alert("Please enter your name.");
      return false;
    }

    if (rollNumber.length < 3) {
      alert("Roll Number should be at least 3 digits long.");
      return false;
    }

    alert(`So your name is ${name}?`);
  }

  return (
    <div>
      <div className="flex flex-row h-screen">
        <Dashboard />
        <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
          <form onSubmit={submitCon}>
            <label htmlFor="rollNumber">Roll Number:</label>
            <input type="text" name="rollNumber" id="rollNumber" />

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
