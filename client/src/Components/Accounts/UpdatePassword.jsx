import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const UpdatePassword = () => {
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
    <Link to={`/update-password/${user._id}`}>
        <button type="submit" className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center pb-2 px-4 rounded-md mt-2 mr-4 w-full">
            Update Password
        </button>
    </Link>
  )
}

export default UpdatePassword