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
    // Perform update API request on the logged in user's data.
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
    if (!passwordIsValid(password)) {
      enqueueSnackbar("Invalid Password", { variant: "error" });
      return false;
    }
    return true;
  };

  const passwordIsValid = (password) => {
    return password.length < 20; // && /\d/.test(password);
  };

  const handleUpdatePassword = () => {
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
    <div className="p-4 dark:bg-gray-900">
      <h1 className="text-3xl font-bold my-4 text-center dark:text-gray-300">Edit Password</h1>
      <div className="flex flex-col border-2 bg-emerald-200 dark:bg-emerald-600 border-emerald-300 dark:border-emerald-600 dark:text-gray-300 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-l mr-4 text-grey-500"><span className="text-2xl mr-4 text-black dark:text-gray-300 font-bold">Enter New Password</span> Must be less than 20 characters</label>
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
