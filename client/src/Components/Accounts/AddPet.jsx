import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import axios from "axios";

const AddPet = () => {
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

  return (    
    <Link to={`/create-pet`}>
      <div className="flex justify-center">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-center text-xl py-2 px-4 rounded-md my-4 w-2/3">
          +   Add Your Pet to Your Account
        </button>
      </div>
    </Link>
  );
};

export default AddPet