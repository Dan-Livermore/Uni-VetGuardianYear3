import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-emerald-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-md p-6 max-w-screen-md w-full mx-auto mt-1 md:mt-0">
          <h1 className="text-center text-2xl font-bold dark:text-gray-300">Manage Data</h1>
          <br />
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <Link to="/admin/users">
                <button className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded w-40">
                  Users
                </button>
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <Link to="/admin/pets">
                {/* <button disabled className="bg-slate-500 text-white font-bold py-2 px-4 rounded w-40"> */}
                <button className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded w-40">
                  Pets
                </button>
              </Link>
            </div>
            
            <div className="flex justify-center items-center">
              <Link to="/admin/predictions">
                <button className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded w-40">
                {/* <button disabled className="bg-slate-500 text-white font-bold py-2 px-4 rounded w-40"> */}
                  Pet's Conditions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
