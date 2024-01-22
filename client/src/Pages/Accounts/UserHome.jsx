import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const UserHome = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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

  const handleLogOut = () => {
    try {
      localStorage.removeItem("token");
    } catch {
      console.log("Can Not Log Out");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-emerald-50">
        <div className="bg-white shadow-md rounded-md p-6 max-w-md w-full mt-1 md:mt-0">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {loading ? (
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Loading...
              </h2>
            ) : (
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {user.firstname} {user.lastname}'s Account
              </h2>
            )}

            <Link to="/log-in">
              <button
                onClick={handleLogOut}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
              >
                Log Out
              </button>
            </Link>

            <Link to="/symptom-checker">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
              >
                Symptom Checker
              </button>
            </Link>
            <Link to="/image-classifier">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
              >
                Pet Identifier
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;