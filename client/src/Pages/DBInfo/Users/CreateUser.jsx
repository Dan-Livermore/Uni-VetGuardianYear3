import React, { useState } from "react";
import BackButton from "../../../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [admin, setAdmin] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveShowing = () => {
    const data = {
      email,
      password,
      firstname,
      lastname,
      admin,
    };
    console.log(data);
    setLoading(true);
    axios
      .post("http://localhost:1111/signup", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("User Created Successfully", { variant: "success" });
        navigate(-1);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4 bg-emerald-50">
      <h1 className="text-3xl text-bold my-4 text-center">Create User</h1>
      <div className="flex flex-col border-2 bg-emerald-300 border-emerald-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-black">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-black">Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-black">
            First Name
          </label>
          <input
            type="text" 
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-black">
            Last Name
          </label>
          <input
            type="text" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-black">
            Admin (Boolean)
          </label>
          {/* <input
            type="radio"
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          /> */}
          <input type="radio"/>
          <input type="radio"/>
        </div>
        <button
          className="p-2 bg-sky-400  hover:bg-sky-600 rounded-lg m-8"
          onClick={handleSaveShowing}
        >
          Save
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default CreateUser;