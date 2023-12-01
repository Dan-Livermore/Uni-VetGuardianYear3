import React, { useState } from 'react';
import axios from 'axios';

const SymptomChecker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append('imagefile', selectedImage);

    try {
      const response = await axios.post('http://localhost:3002/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
<div className="p-4">
  <h1 className="text-2xl font-bold mb-4">Image Uploader</h1>
  <form onSubmit={handleImageUpload} className="mb-4">
    <input type="file" accept="image/*" onChange={handleImageChange} className="border rounded-md p-2"/>
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2">Upload Image</button>
  </form>

  <h1 className="text-2xl font-bold mb-4">Prediction Result</h1>
  {prediction && (<p className="bg-gray-200 p-2 rounded-md"> Prediction: {prediction} </p>)}
</div>

  );
}

export default SymptomChecker;