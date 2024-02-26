import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreatePred = () => {
  const [petID, setpetID] = useState("");
  const [time, settime] = useState("");
  const [output, setoutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showtime, setShowtime] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSavePrediction = () => {
    const data = {
      petID,
      time,
      output,
    };
    console.log(data);
    setLoading(true);
    axios
      .post("http://localhost:1111/signup", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Urediction Created Successfully", { variant: "success" });
        navigate(-1);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <>
    <div>CreatePred</div>
    </>
  )
}

export default CreatePred