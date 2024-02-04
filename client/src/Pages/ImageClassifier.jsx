import React, { useState } from 'react';

const ImageClassifier = () => {
  const [prediction, setPrediction] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setPrediction('');
    setError('');
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage) {
      setError('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('imagefile', selectedImage);

    try {
      const response = await fetch('http://localhost:3002/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.prediction);
        setError(''); 
      } else {
        setError('Failed to identify pet. Please try again.');
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      setError('Failed to identify pet. Please try again.');
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <div className="p-4 bg-emerald-50 h-screen-1.5 min-h-screen">
        <div className="p-4 flex-1">
          <h1 className="text-4xl font-bold mb-4">Pet Identifier</h1>
          <form onSubmit={handleImageUpload} className="mb-4">
            <p className="px-2 py-1">Click on the <b>Choose File</b> button and select a photo of your pet.</p>
            <p className="px-2 py-1">Select the <b>Load Image</b> Button.</p>
            <input type="file" accept="image/*" onChange={handleImageChange} className="bg-white border border-slate-300 rounded-md p-2" />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2">
              Load Image
            </button>
            <p className="px-2 py-4"><b>Supported File Types: GIF, JPEG, PNG.</b></p>
          </form>
          <h1 className="text-4xl mb-4"><b>Identified Pet</b> 'filename'</h1>
          <div className="grid grid-cols-2">
            <div>
              {error ? (
                <p className="bg-red-200 p-2 rounded-md">{error}</p>
              ) : prediction ? (
                <p className="bg-emerald-200 p-2 rounded-md"> Prediction: {prediction} </p>
              ) : null}
              <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2">
                Save Pet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageClassifier;



// import React, { useState } from "react";
// import axios from "axios";

// import Image from "../assets/RecognizerBear.jpg";

// const ImageClassifier = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [prediction, setPrediction] = useState("");

//   const handleImageChange = (event) => {
//     setSelectedImage(event.target.files[0]);
//   };

//   const handleImageUpload = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("imagefile", selectedImage);

//     try {
//       const response = await axios.post(
//         "http://localhost:3002/predict",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setPrediction(response.data.prediction);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//     <div className="p-4 bg-emerald-50 h-screen-1.5 min-h-screen">
//       <div className="p-4 flex-1">
//         <h1 className="text-4xl font-bold mb-4">Pet Identifier</h1>
//         <form onSubmit={handleImageUpload} className="mb-4">
//         <p className="px-2 py-1">Click on the <b>Choose File</b> button and select a photo of your pet.</p>
//         <p className="px-2 py-1">Select the <b>Load Image</b> Button.</p>
//           <input type="file" accept="image/*" onChange={handleImageChange} className="bg-white border border-slate-300 rounded-md p-2"/>
//           <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2">
//             Load Image
//           </button>
//         <p className="px-2 py-4"><b>Supported File Types: GIF, JPEG, PNG.</b></p>
//         </form>
//         <h1 className="text-4xl mb-4"><b>Identified Pet</b> 'filename'</h1>
//         <div className="grid grid-cols-2">

//           <div>
//         {prediction && (<p className="bg-emerald-200 p-2 rounded-md"> Prediction: {prediction} </p>)}

//         <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2">
//           Save Pet 
//         </button>
//         </div>
//       </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default ImageClassifier