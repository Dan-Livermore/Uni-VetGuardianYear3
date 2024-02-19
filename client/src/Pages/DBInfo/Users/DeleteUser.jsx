import React, { useState, useEffect } from "react";
import BackButton from "../../../components/DBInfo/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();  
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
      try {
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
    }, []);

  const handleDeleteUser = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:1111/users/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("User Deleted Successfully", { variant: "success" });
        navigate(-1);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  const handleCancelDelete = () => {
    enqueueSnackbar("Cancelled User Deletion", { variant: "success" });
    navigate(-1);
  }

  return (
    <div className="p-4  min-h-screen">
      {loading ? (
      <h1 className="text-3xl my-4 font-bold text-center">Delete User</h1>
            ) : (
              <h1 className="text-3xl mb-6 font-bold text-center">
                Delete {user.firstname} {user.lastname}
              </h1>
            )}
      <div className="flex flex-col items-center bg-emerald-200 border-2 border-emerald-300 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">
          Are you sure you want to delete this account?
        </h3>

        <button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
          onClick={handleDeleteUser}
        >
          Yes. Delete it
        </button>
        <button
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
          onClick={handleCancelDelete}
        >
          No. Go Back
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default DeleteUser;
