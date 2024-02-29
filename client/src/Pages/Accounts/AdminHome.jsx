import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminHome = () => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8  min-h-screen">
        <div className="bg-white shadow-md rounded-md p-6 max-w-screen-md w-full mx-auto mt-1 md:mt-0">
          <h1 className="text-center text-2xl font-bold">Manage Data</h1>
          <br />
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <Link to="/admin/users">
                <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded w-40">
                  Users
                </button>
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <Link to="/admin/pets">
                {/* <button disabled className="bg-slate-500 text-white font-bold py-2 px-4 rounded w-40"> */}
                <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded w-40">
                  Pets
                </button>
              </Link>
            </div>
            
            <div className="flex justify-center items-center">
              <Link to="/admin/predictions">
                <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded w-40">
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
