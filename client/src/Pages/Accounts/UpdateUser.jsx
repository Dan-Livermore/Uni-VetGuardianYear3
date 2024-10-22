import React, { useState, useEffect } from "react";
import AccountBackButton from "../../components/Accounts/AccountBackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const UpdateUser = () => {
  // Creates state variable for each element of the user collection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  // On load, get all the current data of the user
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1111/users/${id}`)
      .then((response) => {
        setEmail(response.data.email);
        setPassword(response.data.password);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setAdmin(response.data.admin);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  }, []);

  // Validates each section of the form
  const validateForm = () => {
    if (!emailIsValid(email)) {
      enqueueSnackbar("Invalid Email Address", { variant: "error" });
      return false;
    }
    if (!firstnameIsValid(firstname)) {
      enqueueSnackbar("Invalid First Name", { variant: "error" });
      return false;
    }
    if (!lastnameIsValid(lastname)) {
      enqueueSnackbar("Invalid Last Name", { variant: "error" });
      return false;
    }
    return true;
  };

  const emailIsValid = (email) => {
    // Checks that the email contains an @ and a .
    return /\S+@\S+\.\S+/.test(email);
  };

  // Sets arbituary limit of 20 characters for first and last name
  const firstnameIsValid = (firstname) => {
    return firstname && firstname.length <= 20;
  };

  const lastnameIsValid = (lastname) => {
    return lastname && lastname.length <= 20;
  };


  const handleEditUser = () => {
    // Checks the values are valid
    if (!validateForm()) {
      return;
    }
    const data = {
      email,
      password,
      firstname,
      lastname,
      admin,
    };
    setLoading(true);
    axios
    // Performs PUT request to update the user
      .put(`http://localhost:1111/users/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Your Account has Been Updated", { variant: "success" });
        navigate(-1);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4  min-h-screen dark:bg-gray-900 ">
      <h1 className="text-3xl my-4 text-center dark:text-gray-300">Edit User</h1>
      <div className="flex flex-col border-2 border-emerald-300 dark:border-emerald-600 bg-emerald-200 dark:bg-emerald-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 dark:text-gray-300">Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 dark:text-gray-300">First Name</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500 dark:text-gray-300">Last Name</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 rounded-lg m-8"
          onClick={handleEditUser}
        >
          Save
        </button>
      </div>
      <AccountBackButton />
    </div>
  );
};

export default UpdateUser