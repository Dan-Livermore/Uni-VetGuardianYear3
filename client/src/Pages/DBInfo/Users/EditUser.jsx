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

  const handleEditUser = () => {
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
          <label className="text-xl mr-4 text-gray-500">Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">First Name</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Last Name</label>
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
              value="false"
              checked={admin === "false"}
              onChange={(e) => setAdmin(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  mr-2 appearance-none"
              style={{ borderRadius: "0" }}
            />
            <label htmlFor="adminFalse" className="font-bold">
              Standard User
            </label>
            <p>This user has the intended access to the website.</p>
          </div>
          <div>
            <input
              type="radio"
              id="adminTrue"
              value="true"
              checked={admin === "true"}
              onChange={(e) => setAdmin(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  mr-2 appearance-none"
              style={{ borderRadius: "0" }}
            />
            <label htmlFor="adminTrue" className="font-bold">
              Admin
            </label>
            <p>
              This user has the same access as the standard user but can update
              the database directly.
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
