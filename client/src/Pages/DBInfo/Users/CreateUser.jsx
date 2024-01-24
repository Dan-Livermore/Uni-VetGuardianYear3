import React, { useState } from "react";
import BackButton from "../../../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-4 bg-emerald-50">
      <h1 className="text-3xl text-bold my-4 text-center">Create User</h1>
      <div className="flex flex-col border-2 bg-emerald-200 border-emerald-300 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-2xl mr-4 font-bold text-black">
            Email (example@demo.co.uk)
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 font-bold text-black">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full pr-10"
            />
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
          </div>
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 font-bold text-black">
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
          <label className="text-2xl mr-4 font-bold text-black">
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
        <div className="flex flex-col justify-center items-center h-full">
  <button
    className="bg-emerald-500 hover:bg-emerald-600 border-2 border-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md w-3/4"
    onClick={handleSaveShowing}
  >
    Save
  </button>
</div>

      </div>
      <BackButton />
    </div>
  );
};

export default CreateUser;
