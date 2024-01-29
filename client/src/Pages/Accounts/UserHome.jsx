import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

import AdminHome from "./AdminHome";
import DeleteAccount from "../../components/Accounts/DeleteAccount";
import LogOut from "../../components/Accounts/LogOut";
import UpdateAccount from "../../components/Accounts/UpdateAccount";
import UpdatePassword from "../../components/Accounts/UpdatePassword";
import PetsList from "../../components/Accounts/PetsList";

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

  const isAdmin = user.admin === true;

  return (
    <>
      <div className="flex h-full flex-1 flex-col justify-center items-center px-6 pt-12 lg:px-8 bg-emerald-50">
        <div className="bg-white shadow-md rounded-md p-6 w-7/12  mt-1 md:mt-0">
          <div className=" items-center">
            {loading ? (
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Loading...
              </h2>
            ) : (
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {user.firstname} {user.lastname}'s Account
              </h2>
            )}
            <br />
            <UpdateAccount/>
            <br />
            <UpdatePassword/>
            <br />
            <DeleteAccount/>
            <br />
            <PetsList/>
            <br />
            <LogOut/>
          </div>
        </div>
      </div>
      {isAdmin && <AdminHome />}
    </>
  );
};

export default UserHome;
