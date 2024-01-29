import React, { useState, useEffect } from "react";
import AccountBackButton from "../../components/Accounts/AccountBackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const UpdatePassword = () => {
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

  const handleUpdatePassword = () => {
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
        enqueueSnackbar("Password Updated Successfully", { variant: "success" });
        try {
          localStorage.removeItem("token");
          navigate("/log-in");
        } catch {
          console.log("Can Not Log Out");
        }
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold my-4 text-center">Edit Password</h1>
      <div className="flex flex-col border-2 bg-emerald-200 border-emerald-300 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-black">
            Enter New Password
          </label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-emerald-500  hover:bg-emerald-600 rounded-lg m-8 text-white"
          onClick={handleUpdatePassword}
        >
          Save
        </button>
      </div>
      <AccountBackButton />
    </div>
  );
};

export default UpdatePassword;
