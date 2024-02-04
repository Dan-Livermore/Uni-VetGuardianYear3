import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ImageClassifier = () => {
  const [prediction, setPrediction] = useState("");
  const [Image, setImage] = useState("");
  const [error, setError] = useState("");
  const [ImageURL, setImageURL] = useState(null); 


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setPrediction("");
    setError("");
    setImageURL(null);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!Image) {
      setError("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("imagefile", Image);

    const imageURL = URL.createObjectURL(Image);
    setImageURL(imageURL);

    try {
      const response = await fetch("http://localhost:3002/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.prediction);
        setError("");
      } else {
        setError("Failed to identify pet. Please try again.");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setError("Failed to identify pet. Please try again.");
      console.error("Error:", error.message);
    }
  };

  const reset = () => {
    setPrediction("");
    setImage("");
    setError("");
  }

  return (
    <>
      <div className="p-4 bg-emerald-50 h-screen-1.5 min-h-screen">
        {prediction === "" && (
          <div className="p-4 flex-1">
            <h1 className="text-4xl font-bold mb-4">Pet Identifier</h1>
            <form onSubmit={handleImageUpload} className="mb-4">
              <p className="px-2 py-1">Click on the <b>Choose File</b> button and select a photo of your pet.</p>
              <p className="px-2 py-1">Select the <b>Load Image</b> Button.</p>
              <input type="file" accept="image/*" onChange={handleImageChange} className="bg-white border border-slate-300 rounded-md p-2"/>
              <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2">
                Load Image
                </button>
              <p className="px-2 py-4">
                <b>Supported File Types: GIF, JPEG, PNG.</b>
              </p>
            </form>
          </div>
        )}

        {prediction && (
          <>
            <h1 className="text-4xl mb-4">
              <b>Identified Pet</b>
            </h1>
              <div>
                <img src={ImageURL} alt="Image From User" className="w-1/2 h-auto mb-2 border-2 border-solid border-slate-950 rounded-md"/>
                <p className="bg-emerald-200 p-2 rounded-md w-1/2">{" "} Prediction: {prediction}{" "}</p>
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2">
                  Add Your Pet
                </button>
              </div>
              <br/>
                <Link to="/image-classifier">
                <button onClick={reset} className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2 mr-5">
                  <FaArrowLeft style={{ marginRight: '5px' }} />
                  Retry Prediction
                </button>

                </Link>
          </>
        )}

        {error && <p className="bg-red-200 p-2 rounded-md">{error}</p>}
      </div>
    </>
  );
};

export default ImageClassifier;