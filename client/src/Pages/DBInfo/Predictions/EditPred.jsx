import React, { useState, useEffect } from "react";
import BackButton from "../../../components/DBInfo/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditPred = () => {
  const [petID, setPetID] = useState("");
  const [time, setTime] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:1111/predictions/${id}`)
      .then((response) => {
        setPetID(response.data.petID);
        setTime(response.data.time);
        setOutput(response.data.output);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  }, []);

  const validateForm = () => {
    if (!petIDIsValid(petID)) {
      enqueueSnackbar("Invalid petID", { variant: "error" });
      return false;
    }
    if (!timeIsValid(time)) {
      enqueueSnackbar("Invalid Time", { variant: "error" });
      return false;
    }
    if (!outputIsValid(output)) {
      enqueueSnackbar("Invalid Output", { variant: "error" });
      return false;
    }
    return true;
  };

  const petIDIsValid = (petID) => {
    return petID && petID.length <= 20;
  };

  const timeIsValid = (time) => {
    const newDate = new Date(time);
    if (isNaN(date.getTime())) {
      return false;
    }
    return true;
  };

  const outputIsValid = (output) => {
    return output;
  };

  const handleEditPred = () => {
    if (!validateForm()) {
      return;
    }
    const data = {
        petID,
        time,
        output,
      };
      setLoading(true);
      axios
        .put(`http://localhost:1111/predictions/${id}`, data)
        .then(() => {
          setLoading(false);
          enqueueSnackbar("Prediction Updated Successfully", { variant: "success" });
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
      <h1 className="text-3xl my-4 text-center">Edit Prediction</h1>
      <div className="flex flex-col border-2 border-emerald-300 bg-emerald-200 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-2xl mr-4 text-black font-bold">Pet ID</label>
          <input
            type="text"
            value={petID}
            onChange={(e) => setPetID(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-2xl mr-4 text-black font-bold">Time</label>
          <input
            type="text"
            onChange={(e) => setTime(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-l mr-4 text-grey-500"><span className="text-2xl mr-4 text-black font-bold">First Name</span> Must be less than 20 characters</label>
          <input
            type="text"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
        </div>        
        <button
          className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg m-8"
          onClick={handleEditPred}
        >
          Save
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default EditPred;
