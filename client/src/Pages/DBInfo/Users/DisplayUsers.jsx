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
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">List of All Users</h1>
        <Link to="/Users/create">
          <button className="bg-sky-600 text-white rounded-lg w-40 h-10 4xl">Add User</button>
        </Link>
      </div>
        <>
          {users.length === 0 ? (
            <p>No user data in the database</p>
          ) : (
            <table className="w-full border-spacing-2">
              <thead>
                <tr>
                  <th className="border border-slate-600 rounded-md">No.</th>
                  <th className="border border-slate-600 rounded-md">Email</th>
                  <th className="border border-slate-600 rounded-md max-md:hidden">User's Name</th>
                  <th className="border border-slate-600 rounded-md max-md:hidden">Admin</th>
                  <th className="border border-slate-600 rounded-md">Options</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">
                          {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                         {user.email}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                         {user.firstname + " " + user.lastname}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                    {user.admin ? 'Yes' : 'No'}
                    </td>

                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`/users/details/${user._id}`}>
                          <BsInfoCircle className="text-2xl text-green-800" />
                        </Link>
                        <Link to={`/users/edit/${user._id}`}>
                          <AiOutlineEdit className="text-2xl text-yellow-600" />
                        </Link>
                        <Link to={`/users/delete/${user._id}`}>
                          <MdOutlineDelete className="text-2xl text-red-600" />
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