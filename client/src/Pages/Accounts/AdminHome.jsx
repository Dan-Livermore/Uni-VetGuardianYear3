import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminHome = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-emerald-50">
        <div className="bg-white shadow-md rounded-md p-6 max-w-screen-md w-full mx-auto mt-1 md:mt-0">
          <h1 className="text-center text-2xl font-bold">Manage Data</h1>
          <br />
          <div className="grid grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <Link to="/films">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-40">
                  Users
                </button>
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <Link to="/showings">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-40">
                  Pets
                </button>
              </Link>
            </div>
            
            <div className="flex justify-center items-center">
              <Link to="/showings">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-40">
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
