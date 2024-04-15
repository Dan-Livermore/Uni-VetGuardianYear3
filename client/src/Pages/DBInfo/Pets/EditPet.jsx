import React, { useState, useEffect } from "react";
import BackButton from "../../../components/DBInfo/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditPet = () => {
  const [name, setName] = useState("");
  const [ownerID, setOwnerID] = useState("");
  const [animal, setAnimal] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1111/pets/${id}`)
      .then((response) => {
        setName(response.data.name);
        setOwnerID(response.data.ownerID);
        setAnimal(response.data.animal);
        setWeight(response.data.weight);
        setDob(formatDateTimeLocal(response.data.dob));
        setgender(response.data.gender);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  }, []);

  function formatDateTimeLocal(isoDateString) {
    return new Date(isoDateString).toISOString().slice(0, 10);
  }

  function SaveDate(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() + 1);
    return date.toISOString().slice(0, 16);
}


  const validateForm = () => {
    if (!nameIsValid(name)) {
      enqueueSnackbar("Invalid name ", { variant: "error" });
      return false;
    }
    if (!animalIsValid(animal)) {
      enqueueSnackbar("Invalid Animal Type", { variant: "error" });
      return false;
    }
    if (!weightIsValid(weight)) {
      enqueueSnackbar("Invalid Weight. Must be a number", { variant: "error" });
      return false;
    }
    if (!dobIsValid(dob)) {
      enqueueSnackbar("Invalid Date of Birth", { variant: "error" });
      return false;
    }
    if (!genderIsValid(gender)) {
      enqueueSnackbar("Invalid Gender", { variant: "error" });
      return false;
    }
    return true;
  };

  const nameIsValid = (name) => {
    return name && name.length <= 20;
  };

  const animalIsValid = (animal) => {
    return animal && animal.length <= 20;
  };

  const weightIsValid = (weight) => {
    const num = Number(weight);
    return !isNaN(num) && num > 0;
  };

  const dobIsValid = (dob) => {
    return dob && dob.length <= 20;
  };

  const genderIsValid = (gender) => {
    return gender && gender.length <= 20;
  }
  

  const handleEditPet = () => {
    if (!validateForm()) {
      return;
    }
    const data = {
        name,
        ownerID,
        animal,
        weight,
        dob,
        gender,
      };
      setLoading(true);
      axios
        .put(`http://localhost:1111/pets/${id}`, data)
        .then(() => {
          setLoading(false);
          enqueueSnackbar("Pet Updated Successfully", { variant: "success" });
          navigate(-1);
        })
        .catch((error) => {
          setLoading(false);
          enqueueSnackbar("Error", { variant: "error" });
          console.log(error);
        });
    };

  return (
    <div className="p-4 bg-emerald-50 min-h-screen dark:bg-gray-900 dark:text-gray-300">
      <h1 className="text-3xl my-4 text-center">Edit Pet</h1>
      <div className="flex flex-col border-2 border-emerald-300 dark:border-emerald-500 bg-emerald-200 dark:bg-emerald-500  rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-2xl mr-4 text-black dark:text-gray-300 font-bold">Pet Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 text-black dark:text-gray-300 font-bold">Animal</label>
          <input
            type="text"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 text-black dark:text-gray-300 font-bold">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
        <label className="text-2xl mr-4 text-black dark:text-gray-300 font-bold">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(SaveDate(e.target.value))}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 text-black dark:text-gray-300 font-bold">
            Gender
          </label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setDob(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 rounded-lg m-8"
          onClick={handleEditPet}
        >
          Save
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default EditPet;
