import React, { useState } from "react";
import axios from "axios";

import Image from "../assets/RecognizerBear.jpg";

const SymptomChecker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState("");

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append("imagefile", selectedImage);

    try {
      const response = await axios.post(
        "http://localhost:3002/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 bg-purple-100 grid grid-cols-2 gap-4 h-screen">
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-4">Pet Identifier</h1>
        <form onSubmit={handleImageUpload} className="mb-4">
          <input type="file" accept="image/*" onChange={handleImageChange} className="bg-purple-50 border border-slate-300 rounded-md p-2"/>
          <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md mt-2">
            Upload Image
          </button>
        </form>
        <h1 className="text-4xl font-bold mb-4">Pet Prediction</h1>
        {/* {prediction && (<p className="bg-purple-200 p-2 rounded-md"> Prediction: {prediction} </p>)} */}
        <img src={Image} alt="Image From User" className="w-auto h-auto max-h-96 mb-12 border-2 border-solid border-slate-950 rounded-md"/>
        <p className="bg-purple-200 p-2 rounded-md"> Prediction: Bear <br /> Confidence: 81.67%</p>

        <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md mt-2">
          Save Pet 
        </button>
      </div>

      <div className="p-4 h-1/3 text-xl border border-purple-600 border-3 rounded-md bg-purple-300">
        <h1 className="text-4xl font-bold mb-4">Instructions</h1>
        <p>1. Click on the <b>Choose File</b> button and select a photo of your pet.</p>
        <p>2. Select the <b>Upload Image</b> Button.</p>
        <p>3. A prediction of your pet will be displayed.</p>
        <br/>
        <p>Supported File Types: GIF, JPEG, PNG.</p>
      </div>
    </div>
    
  );
};

export default SymptomChecker;
