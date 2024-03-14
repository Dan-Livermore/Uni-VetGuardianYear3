import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const DeleteAccount = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Checks that the user is logged in and is allowed to access the data for other users.
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const id = jwtDecode(token).userId;
        axios
          .get(`http://localhost:1111/users/${id}`)
          .then((response) => {
            setUser(response.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error decoding token:", error);
        setLoading(false);
      }
    }
  }, []);
  return (
    <Link to={`/delete-account/${user._id}`}>
      <div className="flex justify-center">
        <button className="bg-red-500 dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-800 text-white dark:text-gray-300 font-bold text-center text-xl py-2 px-4 rounded-md my-4 w-2/3">
          Delete Account
        </button>
      </div>
    </Link>
  );
};

export default DeleteAccount;
