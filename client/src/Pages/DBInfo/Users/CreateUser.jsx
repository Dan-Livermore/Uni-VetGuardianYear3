import React, { useState } from "react";
import BackButton from "../../../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export const CreateUser = () => {
  const [filmID, setFilmID] = useState("");
  const [startTime, setStartTime] = useState("");
  const [row1, setRow1] = useState("Available,Available,Available,Aisle,Available,Available,Available,Available");
  const [row2, setRow2] = useState("Available,Available,Available,Aisle,Available,Available,Available,Available");
  const [row3, setRow3] = useState("Available,Available,Available,Aisle,Available,Available,Available,Available");
  const [row4, setRow4] = useState("Available,Available,Available,Aisle,Available,Available,Available,Available");
  const [totalSeats, setTotalSeats] = useState(28);
  const [seatsRemaining, setSeatsRemaining] = useState(28);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveShowing = () => {
    const data = {
      filmID,
      startTime,
      row1,
      row2,
      row3,
      row4,
      totalSeats,
      seatsRemaining,
    };
    console.log(data);
    setLoading(true);
    axios
      .post("http://localhost:5555/showings", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Showing Created Successfully", { variant: "success" });
        navigate(-1);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4 text-center">Create Showing</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">filmID</label>
          <input
            type="text"
            value={filmID}
            onChange={(e) => setFilmID(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Start Time</label>
          <input
            type="datetime-local"
            value={startTime ? startTime.slice(0, 16) : ""}
            onChange={(e) => setStartTime(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Row 1 (comma-separated string)
          </label>
          <input
            type="text" // Changed type to accept string input
            value={row1}
            onChange={(e) => setRow1(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
            placeholder="Available, Available, Available, Aisle, Available, Available, Available, Available"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Row 2 (comma-separated string)
          </label>
          <input
            type="text" // Changed type to accept string input
            value={row2}
            onChange={(e) => setRow2(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
            placeholder="Available, Available, Available, Aisle, Available, Available, Available, Available"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Row 3 (comma-separated string)
          </label>
          <input
            type="text" // Changed type to accept string input
            value={row3}
            onChange={(e) => setRow3(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
            placeholder="Available, Available, Available, Aisle, Available, Available, Available, Available"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Row 4 (comma-separated string)
          </label>
          <input
            type="text" // Changed type to accept string input
            value={row4}
            onChange={(e) => setRow4(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
            placeholder="Available, Available, Available, Aisle, Available, Available, Available, Available"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Total Seats</label>
          <input
            type="number"
            value={totalSeats}
            onChange={(e) => setTotalSeats(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Seats Remaining</label>
          <input
            type="number"
            value={seatsRemaining}
            onChange={(e) => setSeatsRemaining(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full"
          />
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

