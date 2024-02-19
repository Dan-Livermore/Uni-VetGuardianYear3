import React, { useState, useEffect } from "react";
import BackButton from "../../../components/DBInfo/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

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
    if (!adminIsValid(admin)) {
      enqueueSnackbar("Invalid Admin Value", { variant: "error" });
      return false;
    }
    return true;
  };

  const emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const firstnameIsValid = (firstname) => {
    return firstname && firstname.length <= 20;
  };

  const lastnameIsValid = (lastname) => {
    return lastname && lastname.length <= 20;
  };

  const adminIsValid = (admin) => {
    return admin === true || admin === false;
  }
  

  const handleEditUser = () => {
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
        .put(`http://localhost:1111/users/${id}`, data)
        .then(() => {
          setLoading(false);
          enqueueSnackbar("User Updated Successfully", { variant: "success" });
          navigate(-1);
        })
        .catch((error) => {
          setLoading(false);
          enqueueSnackbar("Error", { variant: "error" });
          console.log(error);
        });
    };

  return (
    <div className="p-4 bg-emerald-50 min-h-screen">
      <h1 className="text-3xl my-4 text-center">Edit User</h1>
      <div className="flex flex-col border-2 border-emerald-300 bg-emerald-200 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-2xl mr-4 text-black font-bold">Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 text-black font-bold">Password</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-l mr-4 text-grey-500"><span className="text-2xl mr-4 text-black font-bold">First Name</span> Must be less than 20 characters</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
        <label className="text-l mr-4 text-grey-500"><span className="text-2xl mr-4 text-black font-bold">Last Name</span> Must be less than 20 characters</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 text-black font-bold">
            Admin (Boolean)
          </label>
          <div>
            <input
              type="radio"
              id="adminFalse"
              value={false}
              checked={admin === false}
              onChange={() => setAdmin(false)}
              className="border-2 border-gray-500 px-4 py-2  mr-2 appearance-none"
              style={{ borderRadius: "0" }}
            />
            <label htmlFor="adminFalse" className="font-bold">
              Standard User
            </label>
            <p>This user has the intended access to the website.</p>

            <input
              type="radio"
              id="adminTrue"
              value={true}
              checked={admin === true}
              onChange={() => setAdmin(true)}
              className="border-2 border-gray-500 px-4 py-2  mr-2 appearance-none"
              style={{ borderRadius: "0" }}
            />
            <label htmlFor="adminTrue" className="font-bold">
              Admin
            </label>
            <p>
              This user has the same access as the standard user but can create and manage users, pets and other data.
            </p>
          </div>
        </div>
        <button
          className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg m-8"
          onClick={handleEditUser}
        >
          Save
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default EditUser;
