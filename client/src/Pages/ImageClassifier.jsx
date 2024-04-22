import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ImageClassifier = () => {
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  const [Image, setImage] = useState("");
  const [ImageURL, setImageURL] = useState(null); 
  const [error, setError] = useState("");

  // Clear previous data to prepare for new image
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setPrediction("");
    setConfidence("");
    setError("");
    setImageURL(null);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!Image) {
      setError("Please select an image first.");
      return;
    }

    // Create a new FormData object for the new image.
    const formData = new FormData();
    formData.append("imagefile", Image);

    const imageURL = URL.createObjectURL(Image);
    setImageURL(imageURL);

    // Send the image to the python server for prediction.
    try {
      const response = await fetch("http://localhost:3002/predict", {
        method: "POST",
        body: formData,
      });

      // If the image classification is a success, set the prediction and confidence.
      if (response.ok) {
        const data = await response.json();
        setPrediction(data.prediction);
        setConfidence(data.confidence);
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

  const Restart = () => {
    setPrediction("");
    setConfidence("");
    setImage("");
    setError("");
    setImageURL(null);
  }

  return (
    <>
      <div className="p-4  h-screen-1.5 min-h-screen dark:bg-gray-900">
        {prediction === "" && (
          <div className="p-4 flex-1 dark:text-gray-300">
            <h1 className="text-4xl font-bold mb-4">Pet Identifier</h1>
            {/* Use the default chose file part and get a local image file */}
            <form onSubmit={handleImageUpload} className="mb-4 dark:text-gray-600">
              <p className="px-2 py-1 dark:text-gray-300">Click on the <b>Choose File</b> button and select a photo of your pet.</p>
              <p className="px-2 py-1 dark:text-gray-300">Select the <b>Load Image</b> Button.</p>
              <input type="file" accept="image/*" onChange={handleImageChange} className="bg-white border border-slate-300 rounded-md p-2"/>
              <button type="submit" className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded-md mt-2 ml-2">
                Load Image
              </button>
              <p className="px-2 py-4 font-bold dark:text-gray-300">Supported File Types: GIF, JPEG, PNG.</p>
              <p className="px-2 py-4 dark:text-gray-300">No images of pets are stored after pet identification is completed.</p>
            </form>
          </div>
        )}

        {/* When the prediction gets returned, display the image, prediciton and confidence */}
        {prediction && (
          <>
            <h1 className="text-4xl mb-4 dark:text-gray-300">
              <b>Identified Pet</b>
            </h1>
              <div className="dark:text-gray-300">
                <img src={ImageURL} alt="Image From User" className="w-1/2 h-auto mb-2 border-2 border-solid border-slate-950 dark:border-slate-300 rounded-md"/>
                <div className="bg-emerald-200 dark:bg-emerald-500 dark:text-gray-300 p-2 rounded-md w-1/2">
                  <p>{" "} Prediction: {prediction}{" "}</p>
                  <p>{" "} Confidence: {confidence} {"% "}</p>
                </div>
                
                <Link to="/create-pet">
                  <button type="submit" className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded-md mt-2">
                    Add Your Pet
                  </button>
                </Link>
       
              </div>
              <br/>
              <Link to="/image-classifier">
                <button onClick={Restart} className="flex items-center bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded-md mt-2 mr-5">
                  <FaArrowLeft style={{ marginRight: '5px' }} />
                  Retry Prediction
                </button>
              </Link>
          </>
        )}

        {error && <p className="bg-red-200 dark:bg-red-400 dark:text-gr p-2 rounded-md">{error}</p>}
      </div>
    </>
  );
};

export default ImageClassifier;