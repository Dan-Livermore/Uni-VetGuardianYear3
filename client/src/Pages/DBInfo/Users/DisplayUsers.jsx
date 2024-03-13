import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const DisplayUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:1111/users")
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 min-h-screen dark:bg-gray-900 dark:text-gray-300">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">List of All Users</h1>
        <Link to="/admin/users/create">
          <button className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 rounded-lg w-40 h-10 4xl">Add User</button>
        </Link>
      </div>
        <>
          {users.length === 0 ? (
            <p>No user data in the database</p>
          ) : (
            <table className="w-full border-spacing-2 bg-white dark:bg-gray-800">
            <thead className="bg-emerald-500 dark:bg-emerald-700 text-white dark:text-gray-300">
              <tr>
                  <th className="border border-slate-600 dark:border-gray-300">No.</th>
                  <th className="border border-slate-600 dark:border-gray-300">Email</th>
                  <th className="border border-slate-600 dark:border-gray-300 max-md:hidden">User's Name</th>
                  <th className="border border-slate-600 dark:border-gray-300 max-md:hidden">Admin</th>
                  <th className="border border-slate-600 dark:border-gray-300">Options</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="h-8">
                    <td className="border border-slate-700 dark:border-slate-300 text-center">
                          {index + 1}
                    </td>
                    <td className="border border-slate-700 dark:border-slate-300 text-center">
                         {user.email}
                    </td>
                    <td className="border border-slate-700 dark:border-slate-300 text-center">
                         {user.firstname + " " + user.lastname}
                    </td>
                    <td className="border border-slate-700 dark:border-slate-300 text-center">
                    {user.admin ? 'Yes' : 'No'}
                    </td>

                    <td className="border border-slate-700 dark:border-slate-300 text-center max-md:hidden">
                      <div className="flex justify-center gap-x-4">
                      <Link to={`/admin/users/read/${user._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800 dark:text-green-700" />
                      </Link>
                      <Link to={`/admin/users/edit/${user._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600 dark:text-yellow-700" />
                      </Link>
                      <Link to={`/admin/users/delete/${user._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600 dark:text-red-700" />
                      </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
    </div>
  )};

export default DisplayUsers;