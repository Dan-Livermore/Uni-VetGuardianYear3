import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const LogOut = () => {
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
        <Link to="/log-in">
            <button onClick={handleLogOut} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-xl text-center pb-2 px-4 rounded-md mt-2 mr-4 w-full">
                Log Out
            </button>
        </Link>
  )
}

export default LogOut