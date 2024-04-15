import React, { useState, useEffect } from "react";
import BackButton from "../../../components/DBInfo/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeletePet = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();  
  const [Pet, setPet] = useState({});

  useEffect(() => {
    setLoading(true);
      try {
        axios
          .get(`http://localhost:1111/pets/${id}`)
          .then((response) => {
            setPet(response.data);
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

  const handleDeletePet = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:1111/pets/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Pet Deleted Successfully", { variant: "success" });
        navigate(-1);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  const handleCancelDelete = () => {
    enqueueSnackbar("Cancelled Pet Deletion", { variant: "success" });
    navigate(-1);
  }

  return (
    <div className="p-4  min-h-screen dark:bg-gray-900">
      {loading ? (
      <h1 className="text-3xl my-4 font-bold text-center dark:text-gray-300">Delete Pet</h1>
            ) : (
              <h1 className="text-3xl mb-6 font-bold text-center dark:text-gray-300">
                Delete {Pet.name}
              </h1>
            )}
      <div className="flex flex-col items-center border-2 bg-emerald-200 dark:bg-emerald-400 border-emerald-300 dark:border-emerald-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl dark:text-gray-300">
          Are you sure you want to delete this creature?
        </h3>

        <button
          className="flex-1 bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-800 text-white dark:text-gray-300 font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
          onClick={handleDeletePet}
        >
          Yes. Delete it
        </button>
        <button
          className="flex-1 bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-full"
          onClick={handleCancelDelete}
        >
          No. Go Back
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default DeletePet;
