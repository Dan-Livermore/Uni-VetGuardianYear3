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
    <div>
      <h1>Image Uploader</h1>
      <form onSubmit={handleImageUpload}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Upload Image</button>
      </form>

      <h1>Prediction Result</h1>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
}

export default SymptomChecker;